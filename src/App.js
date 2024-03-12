import Login from "./components/Login/Login";
import Todos from "./components/Todo/Todos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <div className="text-white p-10">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Todos />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>

  );
}

export default App;
