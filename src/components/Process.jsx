import {process} from '../data/content';

export default function Process() {
  return (
    <section id="process" className="section">
      <p className="eyebrow">METHODOLOGY & WORKFLOW</p>
      <div className="process-list">
        {process.map((i,n)=>(
          <div className="process-item" key={i.title}>
            <span>0{n+1}</span>
            <div>
              <h3>{i.title}</h3>
              <p>{i.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

