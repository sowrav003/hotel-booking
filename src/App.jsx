import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"


const App = () => {
  return (
    <div>
      <Navbar />
      <div className= "min-h-[70vh]">
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App