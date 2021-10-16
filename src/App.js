
import React,{ Fragment } from 'react';
import './App.css';
import Footer from './components/Footer';

import Navbar from "./components/Navbar";
import SidebarWrapper from './components/SidebarWrapper';
function App() {
  return (
    <Fragment>
      <Navbar/>
   <SidebarWrapper/>
    <Footer/>
    </Fragment>
    
    )
}

export default App;

//JSX
