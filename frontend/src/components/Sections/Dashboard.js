import SectionHeader from '../ui/SectionHeader';

const dashStats = [
  { label: 'Study Streak',  value: '21 days' },
  { label: 'Tests Taken',   value: '47' },
  { label: 'Avg Score',     value: '84%' },
  { label: 'Rank',          value: '#312' },
];

const subjectProgress = [
  { label: 'Physics',     pct: 78, gradient: 'linear-gradient(90deg,#00CFFF,#A855F7)' },
  { label: 'Chemistry',   pct: 62, gradient: 'linear-gradient(90deg,#A855F7,#F472B6)' },
  { label: 'Mathematics', pct: 89, gradient: 'linear-gradient(90deg,#22D3EE,#3B82F6)' },
  { label: 'English',     pct: 55, gradient: 'linear-gradient(90deg,#4ADE80,#22D3EE)' },
];

const myCourses = [
  { emoji: '⚛️', name: 'Advanced Physics', pct: 78 },
  { emoji: '🧮', name: 'Complete Maths',   pct: 89 },
  { emoji: '💻', name: 'Python & CS',      pct: 45 },
];

const dashNavItems = [
  { icon: '🏠', label: 'Overview',   active: true },
  { icon: '📚', label: 'My Courses', active: false },
  { icon: '📊', label: 'Analytics',  active: false },
  { icon: '🧪', label: 'Practice',   active: false },
  { icon: '📝', label: 'Tests',      active: false },
  { icon: '🏆', label: 'Leaderboard',active: false },
];

export default function Dashboard() {
  return (
    <section id="dashboard">
      <SectionHeader
        tag="📊 Student Dashboard"
        tagStyle={{
          borderColor: 'rgba(0,207,255,0.3)',
          background: 'rgba(0,207,255,0.05)',
          color: 'var(--neon-cyan)',
        }}
        title="Your Learning"
        highlight="Command Centre"
        highlightGradient="linear-gradient(90deg, var(--neon-cyan), var(--neon-blue))"
        subtitle="Track every metric of your academic journey — progress, rankings, performance, and upcoming sessions."
      />

      {/* Dashboard Preview Window */}
      <div className="dashboard-preview reveal">
        {/* Browser chrome */}
        <div className="dash-topbar">
          <div className="dash-dots">
            <div className="dash-dot dd-red" />
            <div className="dash-dot dd-yellow" />
            <div className="dash-dot dd-green" />
          </div>
          <div className="dash-url">app.eduplatform.in/dashboard</div>
          <div style={{ width: '60px' }} />
        </div>

        {/* Body */}
        <div className="dash-body">
          {/* Sidebar Nav */}
          <div className="dash-sidebar">
            {dashNavItems.map((item) => (
              <div
                key={item.label}
                className={`dash-nav-item ${item.active ? 'active' : ''}`}
              >
                <div className="dash-nav-icon">{item.icon}</div>
                {item.label}
              </div>
            ))}
          </div>

          {/* Main Panel */}
          <div className="dash-main">
            <div className="dash-welcome">
              Good morning, Arjun 👋
            </div>

            {/* Stat Cards */}
            <div className="dash-stats-row">
              {dashStats.map((s) => (
                <div key={s.label} className="dash-stat">
                  <div className="dash-stat-label">{s.label}</div>
                  <div className="dash-stat-num">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Subject Progress */}
            <div className="progress-section">
              <div className="progress-title">Subject Progress</div>
              {subjectProgress.map((sub) => (
                <div key={sub.label} className="progress-item">
                  <div className="progress-label">{sub.label}</div>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${sub.pct}%`, background: sub.gradient }}
                    />
                  </div>
                  <div className="progress-pct">{sub.pct}%</div>
                </div>
              ))}
            </div>

            {/* My Courses */}
            <div>
              <div className="my-courses-title">My Courses</div>
              <div className="my-courses-row">
                {myCourses.map((c) => (
                  <div key={c.name} className="my-course-card">
                    <div className="my-course-emoji">{c.emoji}</div>
                    <div className="my-course-name">{c.name}</div>
                    <div className="my-course-prog">
                      <div
                        className="my-course-prog-fill"
                        style={{ width: `${c.pct}%` }}
                      />
                    </div>
                    <div className="my-course-pct">{c.pct}% complete</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
