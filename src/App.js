
import './App.css';

import { Routes, Route} from 'react-router-dom';

import {Home} from "./Components/Home/Home"

import {About} from "./Components/About/About"

import {Contact} from "./Components/Contact/Contact"

import {CiriculumVitae} from "./Components/CiriculumVitae/CiriculumVitae"

import {Projects} from "./Components/Projects/Projects"

import {Teaching} from "./Components/Teaching/Teaching"

function App() {
  return (
    <Routes>
      <Route path="/website/About" element={<About />} />
      <Route path="/website/Contact" element={<Contact />} />
      <Route path="/website/CiriculumVitae" element={<CiriculumVitae />} />
      <Route path="/website/" element={<Home />} />
      <Route path="/website/Projects" element={<Projects />} />
      <Route path="/website/Teaching" element={<Teaching />} />
    </Routes>
  );
}

export default App;
