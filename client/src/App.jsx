import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Success from './pages/Success'
import './styles/App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-crema via-white to-salvia/20">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agendar" element={<Booking />} />
          <Route path="/exito" element={<Success />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App