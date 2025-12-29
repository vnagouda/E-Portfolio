import { useState, useEffect } from 'react'
import './BootSequence.css'

// Shorter, punchier boot sequence
const bootLines = [
    { text: '> INIT SYSTEMS', delay: 0, type: 'command' },
    { text: '[CORE] Neural Engine .......... ONLINE', delay: 400, type: 'success' },
    { text: '[LOAD] Vision + Edge .......... OK', delay: 800, type: 'success' },
    { text: '[SYNC] Knowledge Graph ........ ACTIVE', delay: 1200, type: 'info' },
    { text: '[WARN] Curiosity: OVERFLOW', delay: 1800, type: 'warning' },
    { text: '', delay: 2200, type: 'empty' },
    { text: '> READY', delay: 2400, type: 'ready' },
]

// Audio synthesis for futuristic sounds
const playBootSound = (type) => {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)()
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        switch (type) {
            case 'beep':
                oscillator.frequency.value = 880
                oscillator.type = 'sine'
                gainNode.gain.value = 0.06
                oscillator.start()
                oscillator.stop(audioContext.currentTime + 0.04)
                break
            case 'success':
                oscillator.frequency.setValueAtTime(600, audioContext.currentTime)
                oscillator.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.1)
                oscillator.type = 'sine'
                gainNode.gain.value = 0.04
                oscillator.start()
                oscillator.stop(audioContext.currentTime + 0.1)
                break
            case 'warning':
                oscillator.frequency.value = 200
                oscillator.type = 'sawtooth'
                gainNode.gain.value = 0.06
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.25)
                oscillator.start()
                oscillator.stop(audioContext.currentTime + 0.25)
                break
            case 'ready':
                // Rising chord
                const osc2 = audioContext.createOscillator()
                const gain2 = audioContext.createGain()
                osc2.connect(gain2)
                gain2.connect(audioContext.destination)

                oscillator.frequency.setValueAtTime(400, audioContext.currentTime)
                oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.3)
                osc2.frequency.setValueAtTime(600, audioContext.currentTime)
                osc2.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.3)

                oscillator.type = 'sine'
                osc2.type = 'sine'
                gainNode.gain.setValueAtTime(0.05, audioContext.currentTime)
                gain2.gain.setValueAtTime(0.03, audioContext.currentTime)
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4)
                gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4)

                oscillator.start()
                osc2.start()
                oscillator.stop(audioContext.currentTime + 0.4)
                osc2.stop(audioContext.currentTime + 0.4)
                break
            case 'glitch':
                oscillator.frequency.value = 100 + Math.random() * 200
                oscillator.type = 'square'
                gainNode.gain.value = 0.03
                oscillator.start()
                oscillator.stop(audioContext.currentTime + 0.02)
                break
            default:
                break
        }
    } catch (e) {
        // Audio not supported
    }
}

function BootSequence({ onComplete }) {
    const [visibleLines, setVisibleLines] = useState([])
    const [showCTA, setShowCTA] = useState(false)
    const [skipped, setSkipped] = useState(false)
    const [progress, setProgress] = useState(0)
    const [soundEnabled, setSoundEnabled] = useState(false)
    const [glitchActive, setGlitchActive] = useState(false)
    const [glitchIntensity, setGlitchIntensity] = useState(0)

    const enableSound = () => {
        if (!soundEnabled) {
            setSoundEnabled(true)
            playBootSound('beep')
        }
    }

    // Random glitch effects throughout
    useEffect(() => {
        if (skipped || showCTA) return

        const glitchInterval = setInterval(() => {
            if (Math.random() > 0.6) {
                setGlitchActive(true)
                setGlitchIntensity(Math.random())
                if (soundEnabled) playBootSound('glitch')
                setTimeout(() => setGlitchActive(false), 50 + Math.random() * 100)
            }
        }, 300)

        return () => clearInterval(glitchInterval)
    }, [skipped, showCTA, soundEnabled])

    useEffect(() => {
        if (skipped) return

        // Reset lines to prevent duplication on re-renders
        setVisibleLines([])
        setProgress(0)

        const timeouts = bootLines.map((line, index) => {
            return setTimeout(() => {
                setVisibleLines(prev => [...prev, line])
                setProgress(((index + 1) / bootLines.length) * 100)

                if (soundEnabled) {
                    if (line.type === 'success' || line.type === 'info') {
                        playBootSound('success')
                    } else if (line.type === 'warning') {
                        playBootSound('warning')
                    } else if (line.type === 'ready') {
                        playBootSound('ready')
                    } else if (line.type === 'command') {
                        playBootSound('beep')
                    }
                }
            }, line.delay)
        })

        const ctaTimeout = setTimeout(() => {
            setShowCTA(true)
            if (soundEnabled) playBootSound('ready')
        }, 3000)

        return () => {
            timeouts.forEach(clearTimeout)
            clearTimeout(ctaTimeout)
        }
    }, [skipped, soundEnabled])

    const handleSkip = () => {
        setSkipped(true)
        setVisibleLines(bootLines)
        setProgress(100)
        setShowCTA(true)
    }

    return (
        <div
            className={`boot-sequence ${glitchActive ? 'glitch-active' : ''}`}
            style={{ '--glitch-intensity': glitchIntensity }}
            onClick={enableSound}
        >
            <div className="scanline-overlay"></div>
            <div className="noise-overlay"></div>

            <div className="boot-background">
                <div className="grid-overlay"></div>
                <div className="radial-glow"></div>
                <div className="floating-particles"></div>
            </div>

            <div className="boot-container">
                {/* Progress */}
                <div className="boot-progress">
                    <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                    <span className="progress-text">{Math.round(progress)}%</span>
                </div>

                {/* Terminal */}
                <div className="terminal-window">
                    <div className="terminal-header">
                        <div className="terminal-controls">
                            <span className="terminal-dot terminal-dot--red"></span>
                            <span className="terminal-dot terminal-dot--yellow"></span>
                            <span className="terminal-dot terminal-dot--green"></span>
                        </div>
                        <span className="terminal-title">viresh@lab:~$ ./boot</span>
                        <span className="sound-toggle">{soundEnabled ? '🔊' : '🔇'}</span>
                    </div>

                    <div className="terminal-body">
                        {visibleLines.map((line, index) => (
                            <div
                                key={index}
                                className={`boot-line boot-line--${line.type}`}
                            >
                                {line.text}
                            </div>
                        ))}
                        {!showCTA && <span className="cursor-blink">█</span>}
                    </div>
                </div>

                {/* Intro text after ready */}
                {showCTA && (
                    <div className="intro-block fade-in-up">
                        <p className="intro-name">VIRESH</p>
                        <p className="intro-tagline">Building the systems others only theorize about.</p>
                    </div>
                )}

                {/* CTA */}
                {showCTA && (
                    <div className="boot-cta fade-in-up">
                        <button className="btn btn--primary cta-main" onClick={onComplete}>
                            ▶ ENTER LAB
                        </button>
                        <button className="btn" onClick={onComplete}>
                            ◈ VIEW SYSTEMS
                        </button>
                    </div>
                )}

                {!showCTA && (
                    <button className="skip-btn" onClick={handleSkip}>SKIP →</button>
                )}

                {!soundEnabled && (
                    <div className="sound-hint">TAP FOR SOUND</div>
                )}
            </div>

            <div className="corner-decor top-left"></div>
            <div className="corner-decor top-right"></div>
            <div className="corner-decor bottom-left"></div>
            <div className="corner-decor bottom-right"></div>
        </div>
    )
}

export default BootSequence
