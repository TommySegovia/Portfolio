import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from '../Routes/Home/Home';
import Projects from '../Routes/Projects';
import Education from '../Routes/Education';
import Experience from '../Routes/Experience';
import Skills from '../Routes/Skills';
import Arrows from '../UI/Arrows';

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Arrows />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;