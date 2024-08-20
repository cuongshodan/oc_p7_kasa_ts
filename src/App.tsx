import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Error from './pages/Error'
import APropos from './pages/APropos'
import Logement from './pages/Logement'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
