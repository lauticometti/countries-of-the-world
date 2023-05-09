import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home, Detail } from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:coutryId" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
