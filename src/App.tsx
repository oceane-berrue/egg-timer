import { HashRouter as Router, Routes, Route } from "react-router-dom"
import StartPage from "./pages/StartPage"
import Menu from "./pages/Menu"
import Timer from "./pages/Timer"
import EndPage from "./pages/EndPage"
import { useState } from "react"
import { Header } from "./components/Header.tsx"

function App() {

  const [selectedTime, setSelectedTime] = useState<number>(0)
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true)


  const closeWindow = () => {
    window.electronAPI.closeApp()
  }

  const minimizeWindow = () => {
    window.electronAPI.minimizeApp()
  }

  return (
    <div>
      <Header closeApp={closeWindow} minimizeApp={minimizeWindow}/>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<StartPage setSoundEnabled={setSoundEnabled} soundEnabled={soundEnabled}/>} />
            <Route path="/menu" element={<Menu setSelectedTime={setSelectedTime} soundEnabled={soundEnabled}/>} />
            <Route path="/timer" element={<Timer selectedTime={selectedTime} soundEnabled={soundEnabled} />} />
            <Route path="/endpage" element={<EndPage />} />
          </Routes>
        </Router>
      </main>
    </div>
  )
}

export default App
