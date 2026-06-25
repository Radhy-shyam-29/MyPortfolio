import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import { HiCheckCircle } from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { fadeUp, slideLeft, slideRight, staggerContainer } from '../utils/animations'

const socials = [
  { icon: FiGithub,   label: 'GitHub',   url: 'https://github.com/Radhy-shyam-29',                        sub: '@Radhy-shyam-29' },
  { icon: FiLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/radhy-shyam-914a8634b/',        sub: 'linkedin.com/in/radhy-shyam' },
  { icon: FiMail,     label: 'Email',    url: 'mailto:sradhy6@gmail.com',                                  sub: 'sradhy6@gmail.com' },
]

const fields = [
  { name: 'name',    label: 'Your Name',     type: 'text',  placeholder: 'John Doe',           rows: null },
  { name: 'email',   label: 'Email Address', type: 'email', placeholder: 'john@example.com',   rows: null },
  { name: 'subject', label: 'Subject',       type: 'text',  placeholder: "Let's collaborate!", rows: null },
  { name: 'message', label: 'Message',       type: 'textarea', placeholder: 'Tell me about your project...', rows: 4 },
]

export default function Contact() {
  const { ref, isInView } = useScrollAnimation()
  const [form, setForm]   = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]   = useState(false)

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    window.open(`mailto:sradhy6@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`)
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }, 4000)
  }

  return (
    <section id="contact" style={{ backgroundColor: 'var(--c-bg-2)', padding: '7rem 0' }}>
      <div className="container" ref={ref}>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

          {/* Header */}
          <motion.div variants={fadeUp}>
            <h2 className="section-title">Get In Touch</h2>
            <span className="section-rule" />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>

            {/* Left */}
            <motion.div variants={slideLeft}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--c-t1)', marginBottom: '0.75rem' }}>
                Let&apos;s work together
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.82, color: 'var(--c-t3)', marginBottom: '2rem' }}>
                Open to full-time roles, freelance projects, or just a great conversation.
                Whether you have a project in mind or want to say hi — my inbox is always open!
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {socials.map(({ icon: Icon, label, url, sub }) => (
                  <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="contact-social">
                    <div className="cs-icon"><Icon size={17} /></div>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--c-t1)' }}>{label}</p>
                      <p style={{ fontSize: '0.78rem', color: 'var(--c-t3)' }}>{sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div variants={slideRight}>
              <div style={{
                background: '#ffffff',
                border: '1.5px solid var(--c-b1)',
                borderRadius: '22px',
                padding: '2rem',
                boxShadow: 'var(--sh-md)',
              }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                  {fields.map(({ name, label, type, placeholder, rows }) => (
                    <div key={name} className="form-field">
                      <label>{label}</label>
                      {rows
                        ? <textarea name={name} required rows={rows} placeholder={placeholder} value={form[name]} onChange={handleChange} />
                        : <input   name={name} type={type} required placeholder={placeholder} value={form[name]} onChange={handleChange} />
                      }
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '0.25rem',
                      ...(sent ? {
                        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                        boxShadow: '0 8px 28px rgba(34,197,94,0.38)',
                      } : {}),
                    }}
                  >
                    {sent ? <HiCheckCircle size={17} /> : <FiSend size={15} />}
                    <span>{sent ? 'Message Sent!' : 'Send Message'}</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
