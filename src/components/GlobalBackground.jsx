import { useState, useEffect } from 'react'
import './GlobalBackground.css'

function GlobalBackground() {
    const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: `${e.clientX}px`, y: `${e.clientY}px` })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className="global-bg" style={{ '--mouse-x': mousePos.x, '--mouse-y': mousePos.y }}>
            <div className="global-grid-floor"></div>
            <div className="global-vignette"></div>
            <div className="global-spotlight"></div>
            <div className="global-noise"></div>
            <div className="active-scanline"></div>
            <div className="ambient-particles">
                {/* Generated via CSS/JS for better performance or kept simple */}
                <div className="ambient-dot dot-1"></div>
                <div className="ambient-dot dot-2"></div>
                <div className="ambient-dot dot-3"></div>
                <div className="ambient-dot dot-4"></div>
            </div>
        </div>
    )
}

export default GlobalBackground
