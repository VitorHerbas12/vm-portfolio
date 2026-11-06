export default function ProjectMockup({ slug }) {
  if (slug === 'vm-intelligence') {
    return (
      <div className="mockup-container mockup-dashboard">
        <div className="mockup-topbar">
          <div className="mockup-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="mockup-title">vm-intelligence // live-sync</span>
          <span className="mockup-status-tag">
            <span className="pulse-circle green" /> SHEETS CONECTADO
          </span>
        </div>

        <div className="mockup-body">
          <div className="mockup-kpis">
            <div className="mockup-kpi">
              <span className="kpi-label">FATURAMENTO TOTAL</span>
              <span className="kpi-val">R$ 28.450</span>
              <span className="kpi-trend">+24.2%</span>
            </div>
            <div className="mockup-kpi">
              <span className="kpi-label">PROJETOS ATIVOS</span>
              <span className="kpi-val">5 EM EXECUÇÃO</span>
              <span className="kpi-trend neutral">NO PRAZO</span>
            </div>
          </div>

          <div className="mockup-chart-bars">
            <div className="bar" style={{ height: '40%' }} />
            <div className="bar" style={{ height: '65%' }} />
            <div className="bar" style={{ height: '50%' }} />
            <div className="bar active" style={{ height: '85%' }} />
            <div className="bar" style={{ height: '70%' }} />
            <div className="bar" style={{ height: '95%' }} />
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'la-marmitaria-fit') {
    return (
      <div className="mockup-container mockup-fit">
        <div className="mockup-topbar">
          <div className="mockup-dots">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <span className="mockup-title">LA MARMITARIA FIT // E-COMMERCE</span>
          <span className="mockup-status-tag">
            <span className="pulse-circle emerald" /> CARDÁPIO ATIVO
          </span>
        </div>

        <div className="mockup-body fit-body">
          <div className="fit-badge">NUTRIÇÃO ESPORTIVA & DIETA</div>
          <h4 className="fit-heading">Refeições Saudáveis Congeladas</h4>
          
          <div className="fit-cards-mini">
            <div className="fit-card-row">
              <span className="fit-item-name">Frango & Purê de Mandioquinha</span>
              <span className="fit-item-macro">42g Prot · 380 kcal</span>
            </div>
            <div className="fit-card-row">
              <span className="fit-item-name">Patinho Extra Magro c/ Legumes</span>
              <span className="fit-item-macro">40g Prot · 350 kcal</span>
            </div>
          </div>

          <div className="fit-footer">
            <span className="fit-delivery">Entrega Expressa Congelada</span>
            <span className="fit-order-btn">Pedir Marmitas Fit →</span>
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'odontologia' || slug === 'dental') {
    return (
      <div className="mockup-container mockup-healthcare">
        <div className="mockup-topbar">
          <div className="mockup-dots">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <span className="mockup-title">ODONTOLOGIA ESTÉTICA 3D</span>
          <span className="mockup-status-tag">
            <span className="pulse-circle cyan" /> WEBGL ATIVO
          </span>
        </div>

        <div className="mockup-body dental-body">
          <div className="dental-wireframe-badge">
            <svg viewBox="0 0 100 100" className="dental-mesh-svg">
              <circle cx="50" cy="50" r="38" stroke="rgba(0,240,255,0.4)" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
              <ellipse cx="50" cy="50" rx="38" ry="16" stroke="rgba(0,240,255,0.7)" strokeWidth="1.5" fill="none" />
              <ellipse cx="50" cy="50" rx="16" ry="38" stroke="rgba(255,60,80,0.6)" strokeWidth="1.5" fill="none" />
              <circle cx="50" cy="50" r="5" fill="#00f0ff" />
            </svg>
          </div>
          <div className="dental-info">
            <span className="dental-stat">PRECISÃO CLÍNICA</span>
            <p>Simulação interativa antes e depois com mapeamento estético.</p>
          </div>
        </div>
      </div>
    );
  }

  // Gueto Burger
  return (
    <div className="mockup-container mockup-street">
      <div className="mockup-topbar">
        <div className="mockup-dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <span className="mockup-title">GUETO SMASH & STREET BURGER</span>
        <span className="mockup-status-tag">PEDIDOS ABERTOS</span>
      </div>

      <div className="mockup-body street-body">
        <div className="street-sticker">STREET FOOD · SABOR AUTÊNTICO</div>
        <div className="street-brand">GUETO // 04</div>
        <div className="street-footer">
          <span>EXPERIÊNCIA DE ALTA CONVERSÃO</span>
          <span className="order-pill">FAZER PEDIDO</span>
        </div>
      </div>
    </div>
  );
}
