import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const navLinks = [
  { label: 'About',      to: 'about' },
  { label: 'Skills',     to: 'skills' },
  { label: 'Projects',   to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact',    to: 'contact' },
]
const socials = [
  { icon: FiGithub,   url: 'https://github.com/radhyshyam',          label: 'GitHub' },
  { icon: FiLinkedin, url: 'https://linkedin.com/in/radhyshyam',      label: 'LinkedIn' },
  { icon: FiMail,     url: 'mailto:radhy2929@gmail.com',              label: 'Email' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--c-bg-1)', borderTop: '1.5px solid var(--c-b1)' }}>
      <div className="container" style={{ padding: '3.5rem 2.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

          {/* Logo */}
          <Link to="home" smooth duration={600} style={{ cursor: 'pointer', textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: 'linear-gradient(135deg, #F62440, #C9172F)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 900, fontSize: '1rem',
                boxShadow: '0 4px 14px rgba(246,36,64,0.35)',
                fontFamily: "'Fira Code', monospace",
              }}>R</div>
              <span style={{ fontFamily: "'Fira Code', monospace", fontWeight: 700, fontSize: '0.95rem', color: 'var(--c-t1)' }}>
                Radhy<span style={{ color: 'var(--c-red)' }}>.</span>
              </span>
            </div>
          </Link>

          {/* Nav links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.25rem 2rem' }}>
            {navLinks.map(({ label, to }) => (
              <Link
                key={to} to={to} smooth duration={650} offset={-70}
                className="nav-link"
                style={{ fontSize: '0.85rem' }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.65rem' }}>
            {socials.map(({ icon: Icon, url, label }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-btn">
                <Icon size={15} />
              </a>
            ))}
          </div>

          <div className="divider-line" />

          {/* Copyright */}
          <p style={{ fontSize: '0.78rem', color: 'var(--c-t3)', textAlign: 'center' }}>
            © {new Date().getFullYear()}{' '}
            <strong style={{ color: 'var(--c-t2)' }}>Radhy Shyam</strong>.
            {' '}Designed &amp; Built with{' '}
            <strong style={{ color: 'var(--c-red)' }}>React</strong> &amp; ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
