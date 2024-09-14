import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import APropos from './pages/APropos'
import Logement from './pages/Logement'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>

    </>





  )
}

export default App
