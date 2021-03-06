import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import Search from './pages/Search';
import Saved from './pages/Saved';


function App() {
  return (
    <Router>
      <Navbar />
      
      <Route exact path="/" component = {Search} />
      <Route exact path="/saved" component = {Saved} />
      {/* include route with Id for specific item detail page */}
    </Router>
  );
}

export default App;