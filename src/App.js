import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Home from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';

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
