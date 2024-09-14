import { BrowserRouter as Router, Routes, Route } from
  'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Seguro from './components/Seguro'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contato" element={<Contato />}/>
        <Route path="/seguro" element={<Seguro/>}/>
      </Routes>
    </Router>
  )
}
export default AppRoutes;