import SectionHeader from '../ui/SectionHeader';
import { features } from '../../data/features';

function FeatureCard({ feature, index }) {
  return (
    <div className={`feature-card reveal reveal-delay-${(index % 3) + 1}`}>
      <div className={`feature-icon-wrap ${feature.iconClass}`}>
        {feature.icon}
      </div>
      <div className="feature-title">{feature.title}</div>
      <p className="feature-desc">{feature.desc}</p>
      <div className="feature-stats-row">
        {feature.stats.map((s) => (
          <div key={s.label} className="f-stat">
            <span>{s.value}</span>
            {s.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features">
      <SectionHeader
        tag="✨ Why EduPlatform"
        tagStyle={{
          borderColor: 'rgba(0,207,255,0.3)',
          background: 'rgba(0,207,255,0.05)',
          color: 'var(--neon-cyan)',
        }}
        title="Everything You Need to"
        highlight="Excel"
        highlightGradient="linear-gradient(90deg, var(--neon-cyan), var(--neon-blue))"
        subtitle="A complete learning ecosystem — live classes, AI practice, analytics, and more — all in one place."
      />

      <div className="features-grid">
        {features.map((feature, i) => (
          <FeatureCard key={feature.id} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}
