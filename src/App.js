import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Certification from './components/Certificate';


function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      <Navbar setPage={setPage} />
      {page === 'home' && <Home />}
      {page === 'education' && <Education />}
      {page === 'projects' && <Projects />}
      {page === 'Certification' && <Certification />}
      
    </div>
  );
}

export default App;


