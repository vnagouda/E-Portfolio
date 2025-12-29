import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ResourceNode from './ResourceNode'
import './ConsoleNav.css'

const navItems = [
    { path: '/', label: 'LAB', icon: '◉' },
    { path: '/systems', label: 'SYSTEMS', icon: '◈' },
    { path: '/experiments', label: 'EXPERIMENTS', icon: '◇' },
    { path: '/logs', label: 'LOGS', icon: '≡' },
]

function ConsoleNav() {
    const [isOpen, setIsOpen] = useState(false)
    const [isResourceOpen, setResourceOpen] = useState(false)
    const location = useLocation()

    return (
        <>
            <nav className="console-nav">
                <div className="console-nav__container">
                    {/* Logo / Brand */}
                    <NavLink to="/" className="console-nav__brand">
                        <span className="brand-icon">▣</span>
                        <span className="brand-text">VIRESH ANAND NAGOUDA</span>
                        <span className="brand-tag">SYSTEMS_LAB // v1.0.4</span>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <ul className="console-nav__links">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'nav-link--active' : ''}`
                                    }
                                >
                                    <span className="nav-icon">{item.icon}</span>
                                    <span className="nav-label">{item.label}</span>
                                </NavLink>
                            </li>
                        ))}
                        {/* Trigger for Resource Node */}
                        <li>
                            <button className="nav-link special-link" onClick={() => setResourceOpen(true)}>
                                <span className="nav-icon">◎</span>
                                <span className="nav-label">NETWORK</span>
                            </button>
                        </li>
                    </ul>

                    {/* Status Indicator */}
                    <div className="console-nav__status">
                        <span className="status-light status-pulse"></span>
                        <span className="status-text">ONLINE</span>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`console-nav__toggle ${isOpen ? 'is-open' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`console-nav__mobile ${isOpen ? 'is-open' : ''}`}>
                    <ul className="mobile-links">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `mobile-link ${isActive ? 'mobile-link--active' : ''}`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="nav-icon">{item.icon}</span>
                                    <span className="nav-label">{item.label}</span>
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <button
                                className="mobile-link special-link"
                                onClick={() => { setResourceOpen(true); setIsOpen(false); }}
                            >
                                <span className="nav-icon">◎</span>
                                <span className="nav-label">NETWORK</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Global Resource Node Overlay */}
            <ResourceNode isOpen={isResourceOpen} onClose={() => setResourceOpen(false)} />
        </>
    )
}

export default ConsoleNav
