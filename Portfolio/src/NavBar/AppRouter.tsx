import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from '../Routes/Home/Home';
import Projects from '../Routes/Projects/Projects';
import Education from '../Routes/Education/Education';
import Experience from '../Routes/Experience/Experience';

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;