import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Home from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<ProjectsPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
