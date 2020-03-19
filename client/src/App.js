import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Landing from './pages/Landing';
import Search from './pages/Search';
import Saved from './pages/Saved';


function App() {
  return (
    <Router>
      <Route exact path="/" component = {Landing} />
      <Route exact path="/profile/:id" component = {Search} />
      <Route exact path="/buy" component = {Saved} />
      {/* include route with Id for specific item detail page */}
    </Router>
  );
}

export default App;