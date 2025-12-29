import './Logs.css'

const logs = [
    {
        id: 1,
        date: '2024-12-20',
        title: 'On Building for Constraints',
        tags: ['thinking', 'architecture'],
        content: `The best systems I've built were under constraints. Not comfortable constraints like "we have 6 months" but real ones: "this needs to run on a device with 2GB RAM" or "users will have 2G connections."

Constraints force clarity. When you can't add complexity, you find the essence.

ByteSeal exists because I wanted a vault that works offline. Sayas OCR exists because rural users can't install apps reliably. Aquafish exists because fish farmers don't care about cloud—they care about fish.

Every constraint is a design decision.`
    },
    {
        id: 2,
        date: '2024-12-15',
        title: 'Why I Document Failures',
        tags: ['meta', 'philosophy'],
        content: `Most portfolios are highlight reels. This one includes the cutting room floor.

Why?

1. Failures are where the learning happens. Showing only successes misrepresents how building actually works.

2. Honest documentation builds trust. If I'm willing to show what broke, you can trust that what I say worked actually works.

3. Future me needs these notes. I've made the same mistake twice before. Writing it down helps.

The goal isn't to look perfect. The goal is to build things that matter.`
    },
    {
        id: 3,
        date: '2024-12-10',
        title: 'Edge ML: Lessons from 6 Months',
        tags: ['technical', 'ml'],
        content: `After deploying models to Jetsons, Pis, and mobile devices, here's what I know:

1. Start with the hardware budget. What's the inference time you can afford? Work backwards from there.

2. Quantization is not optional. INT8 is your friend. Figure out your accuracy drop tolerance early.

3. Test on actual devices early. The simulator lies.

4. Thermal throttling is real. Your model runs great for 5 minutes, then the chip heats up and everything slows down.

5. Users don't care about accuracy numbers. They care about whether the thing works when they need it.

Edge ML is a different game than cloud ML. Respect the constraints.`
    },
    {
        id: 4,
        date: '2024-12-05',
        title: 'Architecture Decisions I Stand By',
        tags: ['architecture', 'decisions'],
        content: `Some principles I've learned to trust:

LOCAL FIRST: If data can stay on-device, it should. Cloud sync is a feature, not a requirement.

FAIL LOUDLY: Silent failures are debugging nightmares. If something breaks, let it be obvious.

BUILD THE HAPPY PATH FIRST: Get the core flow working before handling edge cases. Otherwise you'll spend weeks on error handling for features that don't work yet.

BORING TECH FOR CRITICAL PATHS: Use exotic tech for experiments, not for the thing that absolutely must work.

LOG EVERYTHING IN PRODUCTION: You will need to debug without access to the device. Structured logs are a lifeline.`
    },
    {
        id: 5,
        date: '2024-11-28',
        title: 'On Genesis-AI',
        tags: ['genesis', 'research'],
        content: `Genesis isn't a product. It's a question.

What would it mean for AI to actually reason—not just predict the next token, but maintain goals, revise beliefs, plan across time?

Current LLMs are brilliant pattern matchers. But they don't have persistent memory. They don't have goals. They don't update their beliefs based on evidence.

Genesis is my exploration of what's missing. Multi-agent coordination. Episodic memory. Goal decomposition.

I don't know if it'll work. That's the point.

Real research means being comfortable with not knowing.`
    }
]

function Logs() {
    const formatDate = (dateStr) => {
        const date = new Date(dateStr)
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

    return (
        <div className="logs-view">
            <div className="container">
                {/* Header */}
                <header className="logs-header">
                    <div className="header-label terminal-text">
                        <span className="log-icon">≡</span> LOGS / THINKING ARCHIVE
                    </div>
                    <h1>Engineering Notes</h1>
                    <p>
                        Architecture thoughts, lessons learned, and the occasional philosophical tangent.<br />
                        This section is for serious readers.
                    </p>
                </header>

                {/* Logs List */}
                <div className="logs-list">
                    {logs.map((log) => (
                        <article key={log.id} className="log-entry">
                            <div className="log-meta">
                                <time className="log-date">{formatDate(log.date)}</time>
                                <div className="log-tags">
                                    {log.tags.map((tag) => (
                                        <span key={tag} className="log-tag">#{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <h2 className="log-title">{log.title}</h2>

                            <div className="log-content">
                                {log.content.split('\n\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Logs
