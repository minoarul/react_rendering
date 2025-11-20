import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/navbar"
import Homepage from './components/homepage'
import String from './components/String'
import Numbers from './components/Numbers'
import Boolean from './components/Boolean'
import "./App.css"

const App = () => {
  return (
    <>
      <div className="header">
        <h1>Movies</h1>
      </div>

      <div className="main-layout">
        <Navbar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/About" element={<String />} />
            <Route path="/Product" element={<Numbers />} />
            <Route path="/Service" element={<Boolean />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
