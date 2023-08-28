import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/registration';
import Navbar from './components/navbar';
import Inicio from './pages/home'
import ToDoList from './pages/todolist';
import ParticlesBackground from './particles/particles_background';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <ParticlesBackground/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/todolist' element={<ToDoList/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
