import Login from "./components/Login/Login";
import Todos from "./components/Todo/Todos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="text-white p-10">
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Todos/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
