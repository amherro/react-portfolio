import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Header from "./components/Header";
import Home from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';

function App() {
  return (
    <Router>
      <main className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<ProjectsPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          {/* <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Home/>}/> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
