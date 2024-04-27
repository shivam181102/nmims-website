import React from 'react'
import { BiMenu, BiX } from 'react-icons/bi'

function Sidebar({sidebarOpen,setSidebarOpen,setisLogin}) {
  

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
        className={`sidebar ${sidebarOpen ? "open" : ""}`}
        style={{
          background: "rgb(51,51,51)",
          color: "white",
          width:`${!sidebarOpen ?"250px"  :"7%" }`,
          height: "100vh",
          position: "fixed",
          top: "80px",
          left: `0`,
          transition: "left 0.3s ease-in-out",
        }}
      >
        <div className="d-flex justify-content-start m-4 align-items-center align-items-center p">
          <button style={{color:'white'}} className="btn" onClick={toggleSidebar}>
            {sidebarOpen ? <BiMenu /> :<BiX /> }
          </button>
        </div>
        
        <div className="d-flex justify-content-start m-4 align-items-center">
              <i className="fs-4 m-2 fs-4 m-2 bi bi-grid">
              </i>
                {!sidebarOpen && <p className="m-0">Dashboard</p>}
            </div>
            <div className="d-flex justify-content-start m-4 align-items-center">
              <i className="fs-4 m-2 fs-4 m-2 bi bi-calendar-check">
              </i>
                {!sidebarOpen && <p className="m-0">Academic Calendar</p>}
            </div>
            <div className="d-flex justify-content-start m-4 align-items-center">
              <i className="fs-4 m-2 bi bi-journals">
              </i>
                {!sidebarOpen && <p className="m-0">My courses</p>}
            </div>
            <div className="d-flex justify-content-start m-4 align-items-center">
              <i className="fs-4 m-2 bi bi-play-circle-fill">
              </i>
                {!sidebarOpen && <p className="m-0">session videos</p>}
            </div>
            <div className="d-flex justify-content-start m-4 align-items-center">
              <i className="fs-4 m-2 bi bi-bookmark-fill">
              </i>
                {!sidebarOpen && <p className="m-0">Bookmarks</p>}
            </div>
            <div className="d-flex justify-content-start m-4 align-items-center">
              <i className="fs-4 m-2 bi bi-file-spreadsheet">
              </i>
                {!sidebarOpen && <p className="m-0">Exams</p>}
            </div>
            <div onClick={()=>setisLogin(false) } className="d-flex justify-content-start m-4 align-items-center">
              
              <i class=" fs-4 m-2 bi bi-box-arrow-right"></i>
                {!sidebarOpen && <p className="m-0">Logout</p>}
            </div>
          
      </div>
  )
}

export default Sidebar