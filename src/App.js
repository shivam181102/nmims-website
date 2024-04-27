import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import TopBar from './Components/TopBar';
import React, { useState } from "react";
function App() {
  const [islogin, setisLogin] = useState(false)
  return (
    <div className="App">
    {/*  */}
    
    {islogin?<TopBar setisLogin={setisLogin}/>:<Login setisLogin={setisLogin}/>}
    
  

    </div>
  );
}

export default App;
