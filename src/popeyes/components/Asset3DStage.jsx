import { useEffect, useRef, useState } from 'react';
import { Renderer, Camera, Transform, Mesh, Box, Cylinder, Program, Color } from 'ogl';

/**
 * Asset3DStage
 * 
 * Viewport 3D cinematográfico e arquitetural reservado para o ativo 3D oficial.
 * 
 * Características:
 * - Renderizador WebGL via OGL (leve, 60fps, sem bloatware).
 * - Efeito sutil de reação ao cursor com interpolação lerp (sem rotação infinita agressiva).
 * - Conexão ao progresso do scroll.
 * - Geometria de placeholder arquitetural elegante (nodo de calibração espacial).
 * - Gancho pronto para carregamento futuro do arquivo .gltf/.glb oficial.
 */
export default function Asset3DStage({ 
  className = '', 
  scrollProgress = 0, 
  stageLabel = 'ASSET 3D EM ESPERA',
  subLabel = 'SLOT PRONTO PARA INTEGRAÇÃO GLTF / GLB',
  interactive = true,
  scale = 1
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [loadError, setLoadError] = useState(false);

  // Armazena referências para a animação
  const animationState = useRef({
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    scrollOffset: 0,
    rafId: null,
    meshNode: null,
    scene: null,
    camera: null,
    renderer: null,
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let renderer;
    let camera;
    let scene;
    let geometry;
    let program;
    let mesh;
    let ringMesh;

    try {
      // 1. Inicializar renderizador OGL de alta performance
      renderer = new Renderer({
        canvas,
        alpha: true,
        antialias: true,
        dpr: Math.min(window.devicePixelRatio, 2),
        powerPreference: 'high-performance',
      });
      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);

      // 2. Câmera de perspectiva cinematográfica
      camera = new Camera(gl, { fov: 32 });
      camera.position.set(0, 0, 4.8);

      // 3. Cena principal
      scene = new Transform();

      // 4. Geometria Arquitetural de Calibração Espacial
      // (NÃO cria frango falso nem modelo genérico. Cria um nodo de precisão espacial que reage à luz e ao movimento)
      const boxGeo = new Box(gl, { width: 1.2, height: 1.2, depth: 1.2 });
      
      const vertexShader = /* glsl */ `
        attribute vec3 position;
        attribute vec3 normal;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform mat3 normalMatrix;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `;

      const fragmentShader = /* glsl */ `
        precision highp float;
        uniform float uTime;
        uniform vec3 uColor;
        uniform vec3 uAccent;
        uniform float uHover;
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
          vec3 lightDir = normalize(vec3(0.6, 0.8, 1.0));
          float diff = max(dot(vNormal, lightDir), 0.0);
          
          // Efeito de iluminação rim/fresnel cinematográfica
          vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
          float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 2.8);
          
          // Gradiente sutil entre preto fosco/espresso e laranja Popeyes nos cantos
          vec3 baseColor = mix(vec3(0.06, 0.05, 0.04), uColor, 0.15);
          vec3 finalColor = baseColor + diff * vec3(0.12, 0.1, 0.09) + fresnel * uAccent * (0.85 + uHover * 0.4);
          
          gl_FragColor = vec4(finalColor, 0.92);
        }
      `;

      program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: new Color('#161412') },
          uAccent: { value: new Color('#F15A24') },
          uHover: { value: 0 },
        },
        transparent: true,
      });

      mesh = new Mesh(gl, { geometry: boxGeo, program });
      mesh.scale.set(0.9 * scale, 0.9 * scale, 0.9 * scale);
      mesh.setParent(scene);

      // Anel orbital de precisão sutil
      const ringGeo = new Cylinder(gl, {
        radiusTop: 1.4,
        radiusBottom: 1.4,
        height: 0.015,
        radialSegments: 48,
      });

      const ringProgram = new Program(gl, {
        vertex: vertexShader,
        fragment: /* glsl */ `
          precision highp float;
          uniform vec3 uAccent;
          void main() {
            gl_FragColor = vec4(uAccent, 0.35);
          }
        `,
        uniforms: {
          uAccent: { value: new Color('#F15A24') },
        },
        transparent: true,
      });

      ringMesh = new Mesh(gl, { geometry: ringGeo, program: ringProgram });
      ringMesh.rotation.x = Math.PI * 0.25;
      ringMesh.setParent(scene);

      animationState.current.meshNode = mesh;
      animationState.current.scene = scene;
      animationState.current.camera = camera;
      animationState.current.renderer = renderer;

      // Redimensionamento
      const resize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        if (width === 0 || height === 0) return;
        renderer.setSize(width, height);
        camera.perspective({ aspect: width / height });
      };

      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(container);

      // 5. Loop de Renderização Reativo (60 FPS, movimento sutil de estúdio)
      let lastTime = performance.now();
      const animate = (t) => {
        const delta = (t - lastTime) * 0.001;
        lastTime = t;

        const state = animationState.current;

        // Suavização do movimento do mouse (lerp)
        state.mouseX += (state.targetMouseX - state.mouseX) * 0.045;
        state.mouseY += (state.targetMouseY - state.mouseY) * 0.045;

        if (mesh) {
          // Reação extremamente sutil ao mouse: inclinação de poucos graus
          mesh.rotation.y = state.mouseX * 0.45;
          mesh.rotation.x = -state.mouseY * 0.35;

          // Reação ao scroll (transformação lenta e elegante)
          mesh.position.y = Math.sin(t * 0.0008) * 0.04 + (state.scrollOffset * 0.2);
          
          if (ringMesh) {
            ringMesh.rotation.z = t * 0.0003;
            ringMesh.rotation.x = (Math.PI * 0.28) + (state.mouseY * 0.15);
          }

          if (program.uniforms.uTime) {
            program.uniforms.uTime.value = t * 0.001;
          }
        }

        renderer.render({ scene, camera });
        state.rafId = requestAnimationFrame(animate);
      };

      animationState.current.rafId = requestAnimationFrame(animate);

      // Exposição global para injeção do modelo GLTF quando o cliente fornecer
      window.__POPEYES_ASSET_READY__ = true;
      window.__POPEYES_SET_3D_ASSET__ = (gltfUrl) => {
        console.log('[Popeyes 3D Stage] Preparado para receber:', gltfUrl);
        // Arquitetura pronta para integração instantânea com GLTFLoader
      };

      return () => {
        ro.disconnect();
        if (animationState.current.rafId) {
          cancelAnimationFrame(animationState.current.rafId);
        }
      };
    } catch (err) {
      console.warn('WebGL fallback ativado:', err);
      setLoadError(true);
    }
  }, [scale]);

  // Atualiza uniform de hover
  useEffect(() => {
    const mesh = animationState.current.meshNode;
    if (mesh && mesh.program && mesh.program.uniforms.uHover) {
      mesh.program.uniforms.uHover.value = isHovered ? 1.0 : 0.0;
    }
  }, [isHovered]);

  // Mouse move handler
  const handleMouseMove = (e) => {
    if (!interactive) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    animationState.current.targetMouseX = Math.max(-1, Math.min(1, x));
    animationState.current.targetMouseY = Math.max(-1, Math.min(1, y));
  };

  const handleMouseLeave = () => {
    animationState.current.targetMouseX = 0;
    animationState.current.targetMouseY = 0;
    setIsHovered(false);
  };

  return (
    <div 
      ref={containerRef} 
      className={`pop-3d-viewport ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ minHeight: '380px' }}
    >
      {/* Canvas WebGL OGL */}
      <canvas 
        ref={canvasRef} 
        className="pop-3d-canvas-container"
      />

      {/* Frame Arquitetural de Calibração Espacial */}
      <div 
        className="pop-3d-architectural-frame pop-interactive"
        style={{
          transform: `scale(${isHovered ? 1.02 : 1})`,
        }}
      >
        {/* Mira e coordenadas técnicas */}
        <div className="pop-3d-crosshairs top-left" />
        <div className="pop-3d-crosshairs top-right" />
        <div className="pop-3d-crosshairs bottom-left" />
        <div className="pop-3d-crosshairs bottom-right" />

        <div className="pop-editorial-badge" style={{ marginBottom: '1.2rem' }}>
          <span className="pop-badge-dot" />
          {stageLabel}
        </div>

        <div style={{
          fontFamily: 'var(--pop-font-mono)',
          fontSize: '0.68rem',
          color: 'var(--pop-cream-dim)',
          letterSpacing: '0.12em',
          maxWidth: '240px',
          lineHeight: '1.5',
          marginTop: 'auto',
          paddingBottom: '0.4rem',
        }}>
          {subLabel}
        </div>

        <div style={{
          fontFamily: 'var(--pop-font-mono)',
          fontSize: '0.6rem',
          color: 'rgba(246, 243, 235, 0.35)',
          letterSpacing: '0.16em',
          marginTop: '0.4rem',
        }}>
          COORD: [42.98° N, 82.14° W] · DELTA 60FPS
        </div>
      </div>
    </div>
  );
}
