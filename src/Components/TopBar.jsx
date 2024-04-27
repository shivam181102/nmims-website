import React, { useState } from "react";

import { BiMenu, BiX } from "react-icons/bi";
import Home from "./Home";
import Footer from "./Footer";
import NavbarComp from "./NavbarComp";
import Sidebar from "./Sidebar";

function TopBar({setisLogin}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div>
      {/* Navbar */}
      <NavbarComp/>
      
    
      {/* Sidebar */}
      
      <Sidebar setisLogin={setisLogin} setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
      {/* Content */}
      <div className="content" style={{ marginLeft: `${!sidebarOpen ?"250px"  :"7%" }` }}>
        {/* Add your page content here */}
        <div
        className="redbar d-flex justify-content-between align-items-center"
        style={{
          background: "rgb(220,53,69)",
          paddingInline: "50px",
          fontSize: "20px",
          color: "white",
        //   position:'fixed'
        }}
      >
        <div>
          <h6>
            Student Zone <i class="bi bi-chevron-double-right"></i> DASHBOARD
          </h6>
        </div>
        <div>
          <i class="bi bi-facebook"></i> <i class="bi bi-twitter"></i>
        </div>
      </div>
        <Home/>
        <Footer/>
      </div>
    </div>
  );
}

export default TopBar;
