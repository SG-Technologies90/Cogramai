import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';

const quizOptions = [
  { id: 'a', label: '3 × 10⁸ m/s' },
  { id: 'b', label: '2.9 × 10⁸ m/s' },
  { id: 'c', label: '1.5 × 10⁸ m/s' },
  { id: 'd', label: '6 × 10⁸ m/s' },
];

const scholStats = [
  {
    icon: '🎓',
    num: '₹25,000',
    label: 'Maximum scholarship per student',
  },
  {
    icon: '🏅',
    num: '12,400+',
    label: 'Students awarded scholarships so far',
  },
  {
    icon: '📅',
    num: 'Dec 15',
    label: 'Next EDSAT exam date',
  },
];

export default function Scholarship() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="scholarship">
      <SectionHeader
        tag="🎓 EDSAT"
        tagStyle={{
          borderColor: 'rgba(168,85,247,0.3)',
          background: 'rgba(168,85,247,0.05)',
          color: 'var(--neon-purple)',
        }}
        title="Earn Your"
        highlight="Scholarship"
        highlightGradient="linear-gradient(90deg, var(--neon-purple), var(--neon-pink))"
        subtitle="Take the EduPlatform Scholarship Aptitude Test and unlock up to ₹25,000 in fee waivers. Batch 2025–26 now open."
      />

      <div className="scholarship-layout">
        {/* Quiz UI */}
        <div className="quiz-ui reveal reveal-delay-1">
          <div className="quiz-header">
            <div className="quiz-title-sm">EDSAT Sample Question</div>

            {/* Timer Ring */}
            <div className="timer-ring">
              <svg width="70" height="70" viewBox="0 0 70 70">
                <defs>
                  <linearGradient id="timerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#F472B6" />
                  </linearGradient>
                </defs>
                <circle
                  className="timer-bg"
                  cx="35" cy="35" r="30"
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  className="timer-progress"
                  cx="35" cy="35" r="30"
                  strokeWidth="4"
                  fill="none"
                  stroke="url(#timerGrad)"
                />
              </svg>
              <div className="timer-text">45s</div>
            </div>
          </div>

          {/* Question */}
          <div className="question-card">
            <div className="question-num">Question 3 of 20 · Physics</div>
            <div className="question-text">
              What is the speed of light in a vacuum?
            </div>
          </div>

          {/* Options */}
          <div className="quiz-options">
            {quizOptions.map((opt) => (
              <button
                key={opt.id}
                className={`quiz-option ${selected === opt.id ? (opt.id === 'a' ? 'correct' : 'selected') : ''}`}
                onClick={() => setSelected(opt.id)}
              >
                <strong style={{ color: 'var(--neon-purple)', marginRight: '8px' }}>
                  {opt.id.toUpperCase()}.
                </strong>
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scholarship Info */}
        <div className="scholarship-info">
          {scholStats.map((stat, i) => (
            <div key={i} className={`schol-stat-card reveal reveal-delay-${i + 1}`}>
              <div className="schol-icon">{stat.icon}</div>
              <div>
                <div className="schol-num">{stat.num}</div>
                <div className="schol-label">{stat.label}</div>
              </div>
            </div>
          ))}

          <a href="#" className="btn-neon reveal reveal-delay-4" style={{ alignSelf: 'flex-start' }}>
            Register for EDSAT
            <span style={{ fontSize: '18px' }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
