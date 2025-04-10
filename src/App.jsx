import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import {HomePage, AddPuppyPage, PuppyPage} from './pages/AllPages';
import NavBar from './features/NavBar';
import './App.css'


function App() {

  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/puppyForm' element={<AddPuppyPage />} />
          <Route path='/puppy/:id' element={<PuppyPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
