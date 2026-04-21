import React from "react";

const services = [
  {
    id: "incidents",
    number: "01",
    title: "Painel de Incidentes",
    subtitle: "Zabbix Integration",
    description: "Centralize todos os alertas e incidentes da sua infraestrutura em um painel unificado com classificação por severidade, histórico detalhado e resolução guiada em tempo real.",
    features: [
      "KPIs ao vivo: críticos, alertas, info e OK",
      "Distribuição por severidade com barras de proporção",
      "Histórico detalhado de cada incidente",
      "Resolução guiada com timestamps e responsável",
    ],
    color: "#FF4D1C",
    image: "/images/incident-dashboard.png"
  },
  {
    id: "ports",
    number: "02",
    title: "Domínio para Consulta de Portas",
    subtitle: "CTO & Caixas Ópticas",
    description: "Consulta em tempo real de vagas disponíveis em caixas de atendimento FTTH, CTO e modulares. Identifique rapidamente portas livres e visualize o nível de sinal do cliente conectado.",
    features: [
      "Mapeamento de todas as CTOs e modulares",
      "Visualização de vagas livres e ocupadas por caixa",
      "Nível de sinal óptico do cliente conectado",
      "Filtros por região, status e capacidade"
    ],
    color: "#0EA5E9",
    image: "/images/consulta-portas.png"
  },
  {
    id: "dashboard",
    number: "03",
    title: "Dashboard em HTML",
    subtitle: "Analytics & Reports",
    description: "Relatórios interativos e dashboards personalizados com métricas de tráfego, latência, uptime e SLA — gerados automaticamente e disponibilizados via web.",
    features: [
      "Métricas de uptime, latência e tráfego em tempo real",
      "Gráficos interativos com histórico por período",
      "Relatórios automáticos para diretoria e clientes",
      "Exportação em HTML sem dependência de software"
    ],
    color: "#8B5CF6",
    image: "/images/painel-html.png"
  },
  {
    id: "notifications",
    number: "04",
    title: "Painel de Notificações",
    subtitle: "WhatsApp & Alerts",
    description: "Sistema inteligente de alertas com filtro de ruído, agrupamento de eventos e escalonamento automático por WhatsApp Business — sem flooding, só o que importa.",
    features: [
      "Alertas inteligentes com filtro de ruído",
      "Escalonamento automático por WhatsApp Business",
      "Agrupamento de eventos correlatos",
      "Configuração de prioridades e horários"
    ],
    color: "#22C55E",
    image: "/images/painel-notificacao.png"
  }
];

function App() {
  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: "#0B1220", color: "#E5E7EB", lineHeight: 1.55, WebkitFontSmoothing: "antialiased", margin: 0, padding: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        /* HEADER */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(11,18,32,0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .header-logo {
          font-size: 28px;
          font-weight: 800;
          color: white;
          display: flex;
          align-items: center;
          gap: 0;
        }
        .header-logo span { color: #6366F1; }
        .header-nav {
          display: flex;
          gap: 32px;
          align-items: center;
        }
        .header-nav a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .header-nav a:hover { color: white; }

        /* HERO */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, #0B1220 0%, #1a1a2e 50%, #0B1220 100%);
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          opacity: 0.2;
        }
        .hero-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .hero-glow.glow-1 { top: -200px; right: -200px; }
        .hero-glow.glow-2 { bottom: -200px; left: -200px; background: radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%); }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 80px 24px;
          max-width: 900px;
        }

        .hero-title {
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -2px;
          margin-bottom: 24px;
          color: white;
        }
        .hero-title span {
          background: linear-gradient(135deg, #6366F1, #EC4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: clamp(18px, 2vw, 22px);
          color: rgba(255,255,255,0.7);
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 700px;
          margin: 60px auto 0;
        }
        .hero-stat {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 28px 20px;
          border-radius: 16px;
          text-align: center;
          backdrop-filter: blur(10px);
        }
        .hero-stat .num { font-size: 36px; font-weight: 800; color: white; margin-bottom: 8px; }
        .hero-stat .lbl { font-size: 13px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 1.5px; }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
        }
        .btn-primary {
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          color: white;
          box-shadow: 0 4px 20px rgba(99,102,241,0.4);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 30px rgba(99,102,241,0.5); }
        .btn-secondary {
          background: rgba(255,255,255,0.1);
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          margin-left: 16px;
        }
        .btn-secondary:hover { background: rgba(255,255,255,0.15); }

        /* SECTIONS */
        section { padding: 100px 0; }

        .section-tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #6366F1;
          margin-bottom: 16px;
        }
        .section-title {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 16px;
          color: white;
        }
        .section-subtitle {
          font-size: 18px;
          color: rgba(255,255,255,0.6);
          max-width: 600px;
          margin-bottom: 48px;
          line-height: 1.6;
        }

        /* FEATURES */
        .features-section {
          position: relative;
          overflow: hidden;
        }
        .features-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          opacity: 0.15;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          position: relative;
          z-index: 1;
          width: 100%;
        }
        .feature-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 32px;
          border-radius: 16px;
          transition: all 0.3s;
        }
        .feature-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(99,102,241,0.5);
          transform: translateY(-4px);
        }
        .feature-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 24px;
        }
        .feature-card h3 { font-size: 18px; font-weight: 700; color: white; margin-bottom: 12px; }
        .feature-card p { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.6; }

        /* SERVICES */
        .services-section {
          position: relative;
          overflow: hidden;
        }
        .services-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          opacity: 0.15;
        }
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }
        .service-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 40px;
          border-radius: 20px;
          transition: all 0.3s;
        }
        .service-card:hover { border-color: rgba(99,102,241,0.3); }
        .service-number {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 800;
          color: white;
          margin-bottom: 20px;
        }
        .service-card h3 { font-size: 22px; font-weight: 700; color: white; margin-bottom: 12px; }
        .service-card p { font-size: 15px; color: rgba(255,255,255,0.6); margin-bottom: 24px; line-height: 1.6; }
        .service-card ul { list-style: none; margin-bottom: 24px; }
        .service-card li { display: flex; gap: 10px; padding: 8px 0; font-size: 14px; color: rgba(255,255,255,0.7); }
        .service-card li::before { content: '✓'; color: #6366F1; font-weight: 700; }

        /* CTA */
        .cta-section {
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          border-radius: 24px;
          padding: 80px 40px;
          text-align: center;
        }
        .cta-section h2 { font-size: clamp(32px, 4vw, 48px); font-weight: 800; color: white; margin-bottom: 16px; }
        .cta-section p { font-size: 18px; color: rgba(255,255,255,0.9); max-width: 600px; margin: 0 auto 32px; }

        /* FOOTER */
        .footer {
          background: #0B1220;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 80px 0 40px;
        }
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .footer-brand h3 {
          font-size: 28px;
          font-weight: 800;
          color: white;
          margin-bottom: 16px;
          display: inline-flex;
          gap: 0;
        }
        .footer-brand h3 span { color: #6366F1; }
        .footer-brand p {
          color: rgba(255,255,255,0.6);
          font-size: 14px;
          line-height: 1.6;
          max-width: 300px;
        }
        .footer-section h4 {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: white;
          margin-bottom: 24px;
        }
        .footer-section a {
          display: block;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 14px;
          margin-bottom: 12px;
          transition: color 0.2s;
        }
        .footer-section a:hover { color: #6366F1; }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-bottom p {
          color: rgba(255,255,255,0.5);
          font-size: 13px;
        }
        .footer-social {
          display: flex;
          gap: 16px;
        }
        .footer-social a {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.2s;
        }
        .footer-social a:hover { background: rgba(99,102,241,0.3); }

        @media (max-width: 768px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .features-grid { grid-template-columns: 1fr; }
          .services-grid { grid-template-columns: 1fr; }
          .btn-secondary { margin-left: 0; margin-top: 16px; }
        }
      `}</style>

      {/* HEADER */}
      <header className="header">
        <div className="header-logo">HUB<span>COM</span></div>
        <nav className="header-nav">
          <a href="#features">Recursos</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-glow glow-1" />
        <div className="hero-glow glow-2" />

        <div className="hero-content">
          <h1 className="hero-title">
            O Hub de Gestão que faltava<br /><span>para a operação do seu Provedor</span>
          </h1>
          <p className="hero-subtitle">
            Painéis de incidentes, consulta de portas e relatórios estratégicos para escalar seu negócio sem perder a qualidade.
          </p>
          <div>
            <a href="#services" className="btn btn-primary">Começar Agora</a>
            <a href="#contact" className="btn btn-secondary">Saiba Mais</a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">99.9%</div>
              <div className="lbl">Visibilidade da rede</div>
            </div>
            <div className="hero-stat">
              <div className="num">Segundos</div>
              <div className="lbl">Diagnóstico de portas</div>
            </div>
            <div className="hero-stat">
              <div className="num">Todos</div>
              <div className="lbl">Portes de provedores</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="features-section">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-tag">Recursos</span>
          <h2 className="section-title">Tudo Que Você Precisa</h2>
          <p className="section-subtitle">Recursos poderosos projetados para ajudar você a escalar suas operações com confiança.</p>

          <div className="features-grid">
            {[
              { icon: "🌐", title: "Consulta de Portas", desc: "Verificação instantânea de viabilidade técnica em caixas FTTH e redes modulares para agilizar suas vendas." },
              { icon: "🚨", title: "Painel de Incidentes", desc: "Monitoramento em tempo real para identificar e isolar falhas antes mesmo que o cliente perceba." },
              { icon: "📊", title: "Dashboard em HTML", desc: "Dashboards personalizados em HTML com gráficos interativos, relatórios estratégicos e visualização de KPIs para tomada de decisão em tempo real." },
              { icon: "📋", title: "Gestão de Projetos", desc: "Controle total sobre a expansão da sua rede, implantação de novos POPs e cronogramas de infraestrutura." },
              { icon: "🔧", title: "Integração & Automação", desc: "Conecte sua operação ao Zabbix, WhatsApp e sistemas legados com APIs flexíveis e notificações inteligentes." },
              { icon: "👥", title: "Portal de Ativos (Cliente)", desc: "Ofereça transparência: um painel \"white-label\" para seu cliente final acompanhar o status da própria conexão." },
            ].map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-section">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-tag">Serviços</span>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Soluções completas para operações de rede e gerenciamento de infraestrutura.</p>

          <div className="services-grid">
            {services.map((s) => (
              <div key={s.id} className="service-card">
                <div className="service-number">{s.number}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <ul>
                  {s.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                {s.image && (
                  <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <img src={s.image} alt={s.title} style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact">
        <div className="container">
          <div className="cta-section">
            <h2>Pronto para Transformar Suas Operações?</h2>
            <p>Junte-se a centenas de provedores que já modernizaram sua infraestrutura com Hubcom. Comece seu teste gratuito hoje.</p>
            <div>
              <a href="mailto:contato@hubcom.com" className="btn" style={{ background: "white", color: "#6366F1" }}>Falar com Vendas</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>HUB<span>COM</span></h3>
              <p>Plataforma completa de gestão para provedores de internet. Monitore, gerencie e escale sua operação com inteligência.</p>
            </div>
            <div className="footer-section">
              <h4>Produto</h4>
              <a href="#features">Recursos</a>
              <a href="#services">Serviços</a>
              <a href="#">Preços</a>
              <a href="#">Integrações</a>
            </div>
            <div className="footer-section">
              <h4>Empresa</h4>
              <a href="#">Sobre nós</a>
              <a href="#">Blog</a>
              <a href="#">Carreiras</a>
              <a href="#contact">Contato</a>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <a href="#">Privacidade</a>
              <a href="#">Termos</a>
              <a href="#">SLA</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Hubcom. Todos os direitos reservados.</p>
            <div className="footer-social">
              <a href="#">𝕏</a>
              <a href="#">in</a>
              <a href="#">▶</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;