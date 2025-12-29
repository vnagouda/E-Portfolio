import { useParams, Link } from 'react-router-dom'
import systemsData from '../data/systems.json'
import './SystemDetail.css'

function SystemDetail() {
    const { id } = useParams()
    const system = systemsData.find(s => s.id === id)

    if (!system) {
        return (
            <div className="system-detail not-found">
                <div className="container">
                    <h1>[ERROR] System Not Found</h1>
                    <p>The requested system dossier does not exist in the registry.</p>
                    <Link to="/systems" className="btn">← BACK TO SYSTEMS</Link>
                </div>
            </div>
        )
    }

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
        <div className="system-detail">
            <div className="container system-dossier-grid">

                {/* === LEFT COLUMN: TECHNICAL SPECS === */}
                <aside className="dossier-sidebar fade-in">
                    {/* Back Nav (Top) */}
                    <Link to="/systems" className="back-link-top">
                        <span className="arrow">←</span> REGISTRY
                    </Link>

                    <div className="sidebar-group">
                        <h3 className="sidebar-label">SYSTEM_VITALS</h3>
                        <div className="tech-metrics">
                            {system.technicalMetrics && Object.entries(system.technicalMetrics).map(([key, value]) => (
                                <div key={key} className="metric-row">
                                    <span className="metric-key">{key}:</span>
                                    <span className="metric-val">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="sidebar-group">
                        <h3 className="sidebar-label">SOURCE_CODE</h3>
                        {system.repoUrl ? (
                            <a href={system.repoUrl} target="_blank" rel="noopener noreferrer" className="repo-link">
                                <span className="icon-github">GH</span>
                                VIEW REPOSITORY ↗
                            </a>
                        ) : (
                            <div className="repo-link disabled">NO ACCESS (CLASSIFIED)</div>
                        )}
                        {system.liveUrl && (
                            <a href={system.liveUrl} target="_blank" rel="noopener noreferrer" className="repo-link live-link">
                                <span className="icon-live">●</span>
                                LIVE DEPLOYMENT ↗
                            </a>
                        )}
                    </div>

                    <div className="sidebar-group">
                        <h3 className="sidebar-label">TECH_STACK</h3>
                        <div className="tech-tags-vertical">
                            {system.technologies.map(tech => (
                                <span key={tech} className="tech-pill">{tech}</span>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* === RIGHT COLUMN: EVIDENCE & NARRATIVE === */}
                <main className="dossier-main slide-in-bottom">

                    {/* Header */}
                    <header className="dossier-header">
                        <div className="header-top">
                            <span className={`status-badge status-badge--${getStatusClass(system.status)}`}>
                                {system.status}
                            </span>
                            <span className="scifi-id">ID: {system.id.toUpperCase().substring(0, 8)}</span>
                        </div>
                        <h1 className="dossier-title">{system.name}</h1>
                        <p className="dossier-tagline">{system.tagline}</p>
                    </header>

                    {/* Visual Evidence Frame */}
                    {system.evidenceImages && system.evidenceImages.length > 0 && (
                        <div className="evidence-frame">
                            <div className="scan-line-fast"></div>
                            <div className="corner-bracket top-left"></div>
                            <div className="corner-bracket bottom-right"></div>
                            <img
                                src={system.evidenceImages[0]}
                                alt={`${system.name} Technical Simulation`}
                                className="evidence-img"
                            />
                            <div className="evidence-label">FIG 1.1: SYSTEM_SIMULATION_VIEW</div>
                        </div>
                    )}

                    {/* Core Data */}
                    <div className="dossier-sections">
                        <section className="text-block">
                            <h2 className="section-header">PROBLEM_STATEMENT</h2>
                            <p>{system.problem}</p>
                        </section>

                        <section className="text-block">
                            <h2 className="section-header">ENGINEERING_SOLUTION</h2>
                            <p>{system.solution}</p>
                        </section>

                        <section className="text-block">
                            <h2 className="section-header">SYSTEM_ARCHITECTURE</h2>
                            <ul className="sys-list">
                                {system.architecture.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <div className="split-row">
                            <section className="text-block">
                                <h2 className="section-header warning-text">CHALLENGES / FAILURES</h2>
                                <ul className="sys-list warning-list">
                                    {system.challenges.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="text-block">
                                <h2 className="section-header cyan-text">FUTURE_ITERATIONS</h2>
                                <ul className="sys-list cyan-list">
                                    {system.improvements.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        <section className="text-block highlight-block">
                            <h2 className="section-header">SIGNIFICANCE</h2>
                            <p className="significance-text">"{system.significance}"</p>
                        </section>
                    </div>

                    <footer className="dossier-nav">
                        <Link to="/systems" className="nav-btn">← RETURN TO REGISTRY</Link>
                    </footer>

                </main>
            </div>
        </div>
    )
}

export default SystemDetail
