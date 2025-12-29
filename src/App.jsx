import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import BootSequence from './components/BootSequence'
import ConsoleNav from './components/ConsoleNav'
import GlobalBackground from './components/GlobalBackground'
import ScrollToTop from './components/ScrollToTop'
import Lab from './views/Lab'
import Systems from './views/Systems'
import SystemDetail from './views/SystemDetail'
import Experiments from './views/Experiments'
import Logs from './views/Logs'
import Contact from './views/Contact'
import './App.css'

function App() {
    const [bootComplete, setBootComplete] = useState(false)

    const handleBootComplete = () => {
        setBootComplete(true)
    }

    if (!bootComplete) {
        return <BootSequence onComplete={handleBootComplete} />
    }

    return (
        <div className="app">
            <ScrollToTop />
            <GlobalBackground />
            <ConsoleNav />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Lab />} />
                    <Route path="/systems" element={<Systems />} />
                    <Route path="/systems/:id" element={<SystemDetail />} />
                    <Route path="/experiments" element={<Experiments />} />
                    <Route path="/logs" element={<Logs />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
