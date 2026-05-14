export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Background Orbs */}
      <div className="hero-orb1" />
      <div className="hero-orb2" />

      {/* LEFT – copy */}
      <div className="hero-left">
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          Now Live — Batch 2025–26
        </div>

        <h1 className="hero-h1">
          <span className="line1">Your Future</span>
          <span className="line2">Starts Here</span>
        </h1>

        <p className="hero-sub">
          Learn smarter with immersive digital education. Join 50,000+ students
          mastering Class 6–12 curriculum with AI-powered tools.
        </p>

        <div className="hero-ctas">
          <a href="#courses" className="btn-neon">
            Explore Courses
            <span style={{ fontSize: '18px' }}>→</span>
          </a>
          <a href="#features" className="btn-outline-neon">
            ▶ Watch Demo
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <div className="hero-stat-num">50K+</div>
            <div className="hero-stat-label">Active Learners</div>
          </div>
          <div style={{ width: '1px', background: 'var(--glass-border)' }} />
          <div>
            <div className="hero-stat-num">1,200+</div>
            <div className="hero-stat-label">Video Lectures</div>
          </div>
          <div style={{ width: '1px', background: 'var(--glass-border)' }} />
          <div>
            <div className="hero-stat-num">98%</div>
            <div className="hero-stat-label">Score Improvement</div>
          </div>
        </div>
      </div>

      {/* RIGHT – 3-D scene */}
      <div className="hero-right">
        <div className="scene-3d">
          {/* Orbiting dots */}
          <div className="orbit-wrap">
            <div className="orbit-dot" />
            <div className="orbit-dot orbit2" />
          </div>

          {/* Screen light beam */}
          <div className="screen-light-beam" />

          {/* Desk surface */}
          <div className="desk" />

          {/* Student figure */}
          <div className="student">
            <div className="student-head" />
            <div className="student-body">
              <div className="student-arms" />
            </div>
          </div>

          {/* Laptop */}
          <div className="laptop">
            <div className="laptop-screen-wrap">
              <div className="laptop-screen">
                <div className="screen-glow" />
                <div className="scan-line" />
                <div className="screen-content">
                  <div className="screen-card blue">MATH</div>
                  <div className="screen-card purple">PHY</div>
                  <div className="screen-card pink">CHEM</div>
                  <div className="screen-card">BIO</div>
                  <div className="screen-card blue">ENG</div>
                  <div className="screen-card purple">CS</div>
                </div>
                <div className="screen-bar w80" />
                <div className="screen-bar w60" />
              </div>
            </div>
            <div className="laptop-base" />
          </div>

          {/* Floating stat cards */}
          <div className="float-el fe1">
            <div className="float-card float-stat">
              <div className="float-icon">📈</div>
              <div>
                <div className="float-num" style={{ color: 'var(--neon-cyan)' }}>94%</div>
                <div className="float-lbl">Score today</div>
              </div>
            </div>
          </div>

          <div className="float-el fe2">
            <div className="float-card purple-card float-stat">
              <div
                className="float-icon"
                style={{
                  background: 'rgba(168,85,247,0.15)',
                  borderColor: 'rgba(168,85,247,0.3)',
                }}
              >
                🔴
              </div>
              <div>
                <div className="float-num" style={{ color: 'var(--neon-purple)' }}>LIVE</div>
                <div className="float-lbl">Physics class</div>
              </div>
            </div>
          </div>

          <div className="float-el fe3">
            <div className="float-card float-stat">
              <div className="float-icon">🏆</div>
              <div>
                <div className="float-num" style={{ color: '#fbbf24' }}>Rank #3</div>
                <div className="float-lbl">Leaderboard</div>
              </div>
            </div>
          </div>

          <div className="float-el fe4">
            <div className="float-card">✅ Assignment Submitted</div>
          </div>
        </div>
      </div>
    </section>
  );
}
