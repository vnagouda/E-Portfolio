import { useState, useMemo } from 'react'
import experimentsData from '../data/experiments.json'
import './Experiments.css'

function Experiments() {
    const [filter, setFilter] = useState('ALL')

    // Extract unique categories
    const categories = useMemo(() => {
        const cats = new Set(experimentsData.map(e => e.category))
        return ['ALL', ...Array.from(cats)]
    }, [])

    const filteredData = useMemo(() => {
        if (filter === 'ALL') return experimentsData
        return experimentsData.filter(e => e.category === filter)
    }, [filter])

    return (
        <div className="experiments-view">
            <div className="container">
                <header className="experiments-header">
                    <div className="header-label terminal-text">
                        <span className="icon">◈</span> ARCHIVE_REGISTRY // FULL_ECOSYSTEM
                    </div>
                    <h1 className="glitch-text" data-text="EXPERIMENTS LOG">EXPERIMENTS LOG</h1>
                    <p>
                        The complete roster of prototypes, research, and tools.<br />
                        <b>{experimentsData.length} UNITS DETECTED.</b>
                    </p>
                </header>

                {/* Filter Bar */}
                <div className="filter-bar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Data Grid */}
                <div className="data-grid">
                    {/* Header Row */}
                    <div className="grid-header">
                        <div className="col id">ID</div>
                        <div className="col project">PROJECT_NAME</div>
                        <div className="col cat">CATEGORY</div>
                        <div className="col status">STATUS</div>
                        <div className="col desc">DESCRIPTION</div>
                        <div className="col tech">STACK</div>
                    </div>

                    {/* Rows */}
                    <div className="grid-body">
                        {filteredData.map((item, index) => (
                            <div key={item.id} className="grid-row" style={{ animationDelay: `${index * 50}ms` }}>
                                <div className="col id">
                                    <span className="mobile-label">ID:</span>
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <div className="col project">
                                    <span className="mobile-label">PROJECT:</span>
                                    {item.title}
                                </div>
                                <div className="col cat">
                                    <span className="mobile-label">CAT:</span>
                                    <span className="cat-tag">{item.category}</span>
                                </div>
                                <div className="col status">
                                    <span className="mobile-label">STATUS:</span>
                                    <span className={`status-badge ${item.status.toLowerCase()}`}>{item.status}</span>
                                </div>
                                <div className="col desc">
                                    {item.desc}
                                </div>
                                <div className="col tech">
                                    <div className="tech-stack">
                                        {item.tech.map(t => (
                                            <span key={t} className="tech-mini">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid-footer">
                    <span>TOTAL_RECORDS: {experimentsData.length}</span>
                    <span>LAST_SYNC: 2025-12-24</span>
                </div>
            </div>
        </div>
    )
}

export default Experiments
