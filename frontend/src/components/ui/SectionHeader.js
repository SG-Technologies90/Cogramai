/**
 * Reusable section header with tag, title, and subtitle.
 *
 * Props:
 *   tag        – emoji + text shown in the pill tag
 *   tagStyle   – optional inline style overrides for the tag pill
 *   title      – plain text before the highlighted word
 *   highlight  – the gradient-text word
 *   highlightGradient – CSS gradient string (default blue→purple)
 *   subtitle   – grey sub-text below the title
 */
export default function SectionHeader({
  tag,
  tagStyle = {},
  title,
  highlight,
  highlightGradient = 'linear-gradient(90deg, var(--neon-blue), var(--neon-purple))',
  subtitle,
}) {
  return (
    <div className="section-header reveal">
      <div className="section-tag" style={tagStyle}>
        {tag}
      </div>

      <h2 className="section-title">
        {title}{' '}
        <span
          style={{
            background: highlightGradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {highlight}
        </span>
      </h2>

      {subtitle && <p className="section-sub">{subtitle}</p>}
    </div>
  );
}
