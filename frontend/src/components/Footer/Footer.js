const footerCols = [
  {
    title: 'Platform',
    links: ['Courses', 'Live Classes', 'Test Series', 'Study Notes', 'Mobile App'],
  },
  {
    title: 'Classes',
    links: ['Class VI–VIII', 'Class IX–X', 'Class XI–XII', 'EDSAT', 'JEE / NEET Prep'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Privacy Policy', 'Terms of Service'],
  },
];

const socialLinks = [
  { label: '𝕏',  title: 'Twitter' },
  { label: 'in', title: 'LinkedIn' },
  { label: 'yt', title: 'YouTube' },
  { label: 'ig', title: 'Instagram' },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        {/* Brand Column */}
        <div>
          <div className="footer-brand-name">EduPlatform</div>
          <p className="footer-brand-desc">
            Immersive digital education for Class 6–12 students across India.
            Building the next generation of thinkers.
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            {socialLinks.map((s) => (
              <a key={s.title} href="#" className="social-btn" title={s.title}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        {footerCols.map((col) => (
          <div key={col.title}>
            <div className="footer-col-title">{col.title}</div>
            <div className="footer-links">
              {col.links.map((link) => (
                <a key={link} href="#" className="footer-link">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">© 2025 EduPlatform. All rights reserved.</div>
        <div style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
          Made with ✦ for curious minds across India
        </div>
      </div>
    </footer>
  );
}
