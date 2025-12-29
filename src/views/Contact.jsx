import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState(null) // 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        // Simulate form submission (replace with actual endpoint)
        try {
            // Using FormSubmit.co or similar service
            const response = await fetch('https://formsubmit.co/ajax/your-email@example.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formState)
            })

            if (response.ok) {
                setStatus('success')
                setFormState({ name: '', email: '', subject: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch (err) {
            setStatus('error')
        }
    }

    return (
        <div className="contact-view">
            <div className="container">
                {/* Header */}
                <header className="contact-header">
                    <div className="header-label terminal-text">
                        <span className="node-icon">◎</span> CONTACT / TRANSMISSION NODE
                    </div>
                    <h1>Open Channel</h1>
                    <p>
                        Got a project, a question, or just want to talk systems?<br />
                        This is the node. Messages get through.
                    </p>
                </header>

                <div className="contact-grid">
                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">IDENTIFIER</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">RETURN ADDRESS</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">SUBJECT LINE</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">TRANSMISSION</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    placeholder="Your message..."
                                    rows={6}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn--primary submit-btn"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}
                            </button>

                            {status === 'success' && (
                                <div className="form-status form-status--success">
                                    ✓ Message received. I'll respond soon.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="form-status form-status--error">
                                    ✕ Transmission failed. Try again or email directly.
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="info-card">
                            <h3>DIRECT CHANNELS</h3>
                            <ul className="channel-list">
                                <li>
                                    <span className="channel-label">EMAIL</span>
                                    <a href="mailto:hello@viresh.dev">hello@viresh.dev</a>
                                </li>
                                <li>
                                    <span className="channel-label">GITHUB</span>
                                    <a href="https://github.com/viresh" target="_blank" rel="noopener noreferrer">
                                        github.com/viresh
                                    </a>
                                </li>
                                <li>
                                    <span className="channel-label">LINKEDIN</span>
                                    <a href="https://linkedin.com/in/viresh" target="_blank" rel="noopener noreferrer">
                                        linkedin.com/in/viresh
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="info-card">
                            <h3>RESPONSE PROTOCOL</h3>
                            <p>
                                I read every message. Response time varies based on complexity
                                and current project load, but I try to reply within 48 hours.
                            </p>
                            <p className="info-note">
                                Tip: Clear subject lines get faster responses.
                            </p>
                        </div>

                        <div className="info-card info-card--highlight">
                            <h3>OPEN TO</h3>
                            <ul className="open-to-list">
                                <li>→ Interesting technical challenges</li>
                                <li>→ Research collaborations</li>
                                <li>→ Consulting on CV/ML systems</li>
                                <li>→ Part-time / Contract work</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
