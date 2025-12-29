import { useState, useEffect } from 'react'
import profileData from '../data/profile.json'
import './ResourceNode.css'

function ResourceNode({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState('LINKS')
    const [terminalLines, setTerminalLines] = useState([])

    useEffect(() => {
        if (isOpen) {
            setTerminalLines([])
            const sequence = [
                'INITIATING_HANDSHAKE...',
                'RESOLVING_HOST: vnago.dev',
                'ESTABLISHING_SECURE_TUNNEL...',
                'CONNECTION_ESTABLISHED'
            ]

            let delay = 0
            sequence.forEach(line => {
                setTimeout(() => {
                    setTerminalLines(prev => [...prev, line])
                }, delay)
                delay += 150
            })
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="resource-node-overlay" onClick={onClose}>
            <div className="resource-node-modal" onClick={e => e.stopPropagation()}>

                {/* Header */}
                <header className="node-header">
                    <div className="node-title">
                        <span className="blink">●</span> NET_NODE_V1
                    </div>
                    <button className="close-btn" onClick={onClose}>[X]</button>
                </header>

                {/* Terminal Output */}
                <div className="node-terminal">
                    {terminalLines.map((line, i) => (
                        <div key={i} className="terminal-line">
                            <span className="prompt">{'>'}</span> {line}
                        </div>
                    ))}
                    <div className="terminal-cursor">_</div>
                </div>

                {/* Content */}
                <div className="node-content">
                    <div className="node-grid">

                        {/* Profile Card */}
                        <div className="profile-card">
                            <div className="scan-avatar"></div>
                            <h3>{profileData.name}</h3>
                            <p className="role">{profileData.title}</p>
                            <div className="status-row">
                                <span>CLEARANCE:</span>
                                <span className="val">{profileData.stats.security_clearance}</span>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="link-cluster">
                            <a href={profileData.links.github} target="_blank" rel="noopener noreferrer" className="node-link github">
                                <span className="link-icon">GH</span>
                                <div className="link-details">
                                    <span className="link-label">GITHUB_REPO</span>
                                    <span className="link-meta">SOURCE_CODE_ACCESS</span>
                                </div>
                                <span className="arrow">↗</span>
                            </a>

                            <a href={profileData.links.linkedin} target="_blank" rel="noopener noreferrer" className="node-link linkedin">
                                <span className="link-icon">IN</span>
                                <div className="link-details">
                                    <span className="link-label">LINKEDIN_INTEL</span>
                                    <span className="link-meta">PROFESSIONAL_NETWORK</span>
                                </div>
                                <span className="arrow">↗</span>
                            </a>

                            <a href={`mailto:${profileData.links.email}`} className="node-link email">
                                <span className="link-icon">@</span>
                                <div className="link-details">
                                    <span className="link-label">SECURE_COMMS</span>
                                    <span className="link-meta">DIRECT_MESSAGE_RELAY</span>
                                </div>
                                <span className="arrow">→</span>
                            </a>
                        </div>
                    </div>
                </div>

                <footer className="node-footer">
                    ID: {profileData.stats.systems_id} | UPTIME: 99.9%
                </footer>
            </div>
        </div>
    )
}

export default ResourceNode
