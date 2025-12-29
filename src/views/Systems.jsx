import { Link } from 'react-router-dom'
import systemsData from '../data/systems.json'
import './Systems.css'

function Systems() {
    const getStatusClass = (status) => {
        const statusMap = {
            'DEPLOYED': 'deployed',
            'ACTIVE': 'active',
            'FIELD TESTED': 'active',
            'CLASSIFIED': 'classified',
            'ARCHIVED': 'archived'
        }
        return statusMap[status] || 'active'
    }

    return (
        <div className="systems-view">
            {/* Ambient Background */}
            <div className="systems-bg">
                <div className="hex-pattern"></div>
                <div className="scan-line-slow"></div>
            </div>

            <div className="container systems-layout">
                {/* Left Sidebar: Architect Identity */}
                <aside className="systems-sidebar fade-in">
                    <div className="identity-card">
                        <div className="identity-header">
                            <span className="id-tag">ARCHITECT_ID</span>
                            <div className="id-dots"><span></span><span></span><span></span></div>
                        </div>
                        <div className="identity-body">
                            <h2 className="id-name">VIRESH ANAND NAGOUDA</h2>
                            <p className="id-title">Systems Intelligence Architect</p>
                            <div className="id-stats">
                                <div className="id-stat">
                                    <span className="label">LOC:</span>
                                    <span className="val">Bengaluru, IN</span>
                                </div>
                                <div className="id-stat">
                                    <span className="label">CORE:</span>
                                    <span className="val">Distributed Systems</span>
                                </div>
                                <div className="id-stat">
                                    <span className="label">Uptime:</span>
                                    <span className="val">99.9%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="system-metrics">
                        <div className="metric-item">
                            <span className="metric-label">TOTAL_SYSTEMS</span>
                            <span className="metric-value">{systemsData.length}</span>
                        </div>
                        <div className="metric-item">
                            <span className="metric-label">LOAD_BALANCE</span>
                            <span className="metric-value">OPTIMAL</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="systems-content">
                    <header className="systems-header slide-in-top">
                        <div className="header-meta">
                            <span className="pulse-indicator"></span>
                            <span className="meta-text">REAL_TIME_DEPLOYMENT_FEED</span>
                        </div>
                        <h1 className="glitch-title" data-text="System Dossiers">System Dossiers</h1>
                        <p className="header-desc">
                            Technical breakdowns of end-to-end systems built for production, research, and edge deployments.
                        </p>
                    </header>

                    <div className="systems-grid">
                        {systemsData.map((system, index) => (
                            <Link
                                to={`/systems/${system.id}`}
                                key={system.id}
                                className={`system-dossier-card fade-in-up stagger-${(index % 5) + 1}`}
                            >
                                <div className="dossier-border"></div>
                                <div className="card-top">
                                    <span className={`status-pill ${getStatusClass(system.status)}`}>
                                        {system.status}
                                    </span>
                                    <span className="domain-id">{system.domain}</span>
                                </div>

                                <h3 className="system-name">{system.name}</h3>
                                <p className="system-tagline">{system.tagline}</p>

                                <div className="card-footer">
                                    <div className="tech-stack-preview">
                                        {system.technologies.slice(0, 3).map(tech => (
                                            <span key={tech} className="tech-tag-mini">{tech}</span>
                                        ))}
                                        {system.technologies.length > 3 && <span>...</span>}
                                    </div>
                                    <span className="link-arrow">ACCESS_FILES →</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Legend */}
                    <footer className="systems-legend fade-in">
                        <div className="legend-grid">
                            <div className="legend-item">
                                <span className="dot deployed"></span>
                                <div>
                                    <strong>DEPLOYED</strong>
                                    <p>Battle-tested in real environments.</p>
                                </div>
                            </div>
                            <div className="legend-item">
                                <span className="dot active"></span>
                                <div>
                                    <strong>ACTIVE</strong>
                                    <p>Evolution in progress.</p>
                                </div>
                            </div>
                            <div className="legend-item">
                                <span className="dot classified"></span>
                                <div>
                                    <strong>CLASSIFIED</strong>
                                    <p>Research/Lab experiments.</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Systems
