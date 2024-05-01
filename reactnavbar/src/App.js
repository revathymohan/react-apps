import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Home } from './components/NavBar/Home';
import Blogs from './components/NavBar/Blogs';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>

        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blogs" element={<Blogs />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
