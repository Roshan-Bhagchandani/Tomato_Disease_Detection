
import "./CSS/style.css"
import "./CSS/index.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { NotFound } from "./Components/NotFound";
import { Header } from "./Components/Header";
import { Disease } from "./Components/Disease";

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/disease/:id" element={<Disease/>} />
              <Route exact path="*" element={NotFound}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
