import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <h1 className="mt-40 text-center text-4xl text-[#246d91] font-bold ">Welcome To My Project.</h1>
      </Router>
    </div>
  )
}

export default App