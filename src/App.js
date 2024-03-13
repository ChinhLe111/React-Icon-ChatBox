import Login from "./components/Login/Login";
import Todos from "./components/Todo/Todos";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {
  const [playStatus, setPlayStatus] = useState(true);
  return (
    <div>
      <Background playStatus={playStatus} />
      <Router>
        <Header />
        <div className="text-white p-10">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Todos />} />
          </Routes>
        </div>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
