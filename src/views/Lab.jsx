import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Lab.css'

function Lab() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <div className={`lab-view ${loaded ? 'loaded' : ''}`}>
            {/* Hero Section */}
            <section className="lab-hero">
                {/* Animated background elements */}
                <div className="hero-bg">
                    <div className="glow-orb glow-orb--1"></div>
                    <div className="glow-orb glow-orb--2"></div>
                </div>

                <div className="container">
                    <div className="hero-content">
                        {/* Status indicator */}
                        <div className="hero-status">
                            <span className="status-dot"></span>
                            <span className="status-text">SYSTEMS OPERATIONAL</span>
                        </div>

                        {/* Main headline */}
                        <h1 className="hero-title">
                            <span className="title-line title-line--1">I DON'T BUILD</span>
                            <span className="title-line title-line--2">PROTOTYPES.</span>
                            <span className="title-line title-line--3 accent">I BUILD <span className="glitch-text" data-text="SYSTEMS">SYSTEMS</span>.</span>
                        </h1>

                        {/* Tagline */}
                        <p className="hero-tagline">
                            Production ML. Secure infrastructure. Edge deployments.<br />
                            <span className="tagline-accent">The kind of tech that runs when no one's watching.</span>
                        </p>

                        {/* Quick intro */}
                        <div className="hero-intro">
                            <span className="intro-label">OPERATOR:</span>
                            <span className="intro-name">Viresh Anand Nagouda</span>
                        </div>

                        <div className="hero-cta">
                            <Link to="/systems" className="btn btn--primary btn--glow">
                                <span className="btn-icon">◈</span>
                                EXPLORE SYSTEMS
                            </Link>
                            <Link to="/experiments" className="btn btn--outline">
                                <span className="btn-icon">⚠</span>
                                VIEW FAILURES
                            </Link>
                        </div>
                    </div>

                    {/* Stats panel */}
                    <div className="hero-panel">
                        <div className="panel-header">
                            <span className="panel-title">// SYSTEM METRICS</span>
                        </div>
                        <div className="panel-stats">
                            <div className="stat-item">
                                <span className="stat-value">5</span>
                                <span className="stat-label">DEPLOYED</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">3</span>
                                <span className="stat-label">DOMAINS</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">∞</span>
                                <span className="stat-label">ITERATIONS</span>
                            </div>
                        </div>
                        <div className="panel-footer">
                            <span className="panel-note">Last commit: Today</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="lab-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">// CAPABILITIES</span>
                        <h2 className="section-title">What I Actually Do</h2>
                        <p className="section-desc">Not buzzwords. Capabilities backed by deployments.</p>
                    </div>

                    <div className="capabilities-grid">
                        <div className="capability-card">
                            <div className="capability-header">
                                <span className="capability-icon">⚡</span>
                                <span className="capability-tag">EDGE</span>
                            </div>
                            <h3>Deploy ML to Edge</h3>
                            <p>Jetson. Pi. Mobile. Models that run where cloud can't reach.</p>
                            <div className="capability-evidence">
                                <span>→ Aquafish</span>
                                <span>→ Crowd Flow</span>
                            </div>
                        </div>

                        <div className="capability-card">
                            <div className="capability-header">
                                <span className="capability-icon">🔒</span>
                                <span className="capability-tag">SECURITY</span>
                            </div>
                            <h3>Build Secure Systems</h3>
                            <p>E2E encryption. Zero-trust. Security as first-class citizen.</p>
                            <div className="capability-evidence">
                                <span>→ ByteSeal</span>
                            </div>
                        </div>

                        <div className="capability-card">
                            <div className="capability-header">
                                <span className="capability-icon">🌍</span>
                                <span className="capability-tag">CONSTRAINTS</span>
                            </div>
                            <h3>Ship Under Pressure</h3>
                            <p>2G networks. Low-end devices. Users who don't read docs.</p>
                            <div className="capability-evidence">
                                <span>→ Sayas OCR</span>
                            </div>
                        </div>

                        <div className="capability-card">
                            <div className="capability-header">
                                <span className="capability-icon">🧠</span>
                                <span className="capability-tag">ARCHITECTURE</span>
                            </div>
                            <h3>Think in Systems</h3>
                            <p>Not just code. Architectures that scale and don't break at 3am.</p>
                            <div className="capability-evidence">
                                <span>→ Everything</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How I Think */}
            <section className="lab-section lab-section--alt">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">// OPERATING PRINCIPLES</span>
                        <h2 className="section-title">How I Think</h2>
                    </div>

                    <div className="principles-grid">
                        <div className="principle-item">
                            <span className="principle-num">01</span>
                            <span className="principle-text">Overbuild first, then simplify.</span>
                        </div>
                        <div className="principle-item">
                            <span className="principle-num">02</span>
                            <span className="principle-text">Don't trust black boxes blindly.</span>
                        </div>
                        <div className="principle-item">
                            <span className="principle-num">03</span>
                            <span className="principle-text">UX matters even in backend tools.</span>
                        </div>
                        <div className="principle-item">
                            <span className="principle-num">04</span>
                            <span className="principle-text">Ship &gt; theorize.</span>
                        </div>
                        <div className="principle-item">
                            <span className="principle-num">05</span>
                            <span className="principle-text">Document for future-me.</span>
                        </div>
                        <div className="principle-item">
                            <span className="principle-num">06</span>
                            <span className="principle-text">Break things to understand them.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="lab-section lab-cta">
                <div className="container">
                    <div className="cta-content">
                        <span className="cta-tag">// TRANSMISSION</span>
                        <h2>Ready to go deeper?</h2>
                        <div className="cta-buttons">
                            <Link to="/systems" className="btn btn--primary btn--glow">
                                ENTER SYSTEMS
                            </Link>
                            <Link to="/contact" className="btn btn--outline">
                                OPEN CHANNEL
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Lab
