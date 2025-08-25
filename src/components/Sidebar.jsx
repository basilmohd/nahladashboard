// import React from 'react';
// import { Link } from 'react-router';

// const Sidebar = () => {
//   return (

//     <div style={{ backgroundColor: '#072bf3', width: '100px', height: '93.5vh', position: 'fixed', textAlign: "center", marginLeft: "30px", marginTop: "30px", marginBottom: "-50px", borderRadius: "20px" }}>
//       <img src='./Logo.png' style={{ marginTop: "30px", height:"80px", width:"80px" }} />

//       <ul style={{ listStyleType: 'none', padding: '0', margin: '0', paddingTop: "50px", marginLeft: "15px" }}>

       

//         <li>
//           <Link to="/" style={{ color: 'black', padding: '10px', display: 'block', textDecoration: "none" }}>


//             <img src='./dashboard-icon.svg' style={{ height: "30px", marginRight: "8px" }} />
//             {/* Dashboard */}
//           </Link>
//         </li>




//         <li>
//           <Link to="/fileUpload" style={{ color: 'black', padding: '10px', display: 'block', textDecoration: "none" }}>

//             <img src='./data-icon.svg' style={{ height: "30px", marginRight: "8px" }} />

//             {/* Analytics */}
//           </Link>
//         </li>

//         {/* <li>
//           <Link to="/data" style={{ color: 'black', padding: '10px', display: 'flex', textDecoration: "none" }}>

//             <img src='./data-icon.svg' style={{ height: "20px", marginRight: "8px" }} />

//             Data
//           </Link>
//         </li> */}
//         {/* <li>
//           <Link to="/analytics" style={{ color: 'black', padding: '10px', display: 'block', textDecoration: "none" }}>

//             <img src='./analytics-icon.svg' style={{ height: "30px", marginRight: "8px" }} />

//           </Link>
//         </li> */}

//         {/* <li>
//           <Link to="/performance" style={{ color: 'black', padding: '10px', display: 'flex', textDecoration: "none" }}>

//             <img src='./performance-icon.svg' style={{ height: "20px", marginRight: "8px" }} />

//             Performance
//           </Link>
//         </li> */}
//         {/* 
//         <hr style={{ width: "90%", marginLeft: "-2px" }}></hr>

//         <li>
//           <Link to="/aiAnalysis" style={{ color: 'black', padding: '10px', display: 'flex', textDecoration: "none" }}>

//             <img src='./ai-analysis-icon.svg' style={{ height: "25px", marginRight: "8px" }} />

//             AI Analysis
//           </Link>
//         </li>

//         <hr style={{ width: "90%", marginLeft: "-2px" }}></hr>


//         <li>
//           <Link to="/summary" style={{ color: 'black', padding: '10px', display: 'flex', textDecoration: "none" }}>
//             <img src='./settings-icon.svg' style={{ height: "20px", marginRight: "8px" }} />

//             Settings
//           </Link>
//         </li>
//         <li>
//           <Link to="/report" style={{ color: 'black', padding: '10px', display: 'flex', textDecoration: "none" }}>
//             <img src='./help-center.svg' style={{ height: "20px", marginRight: "8px" }} />

//             Help  Center
//           </Link>
//         </li> */}
//       </ul>
//       {/* <button style={{ position: 'absolute', bottom: '10px', left: '10px' }}>Logout</button> */}
//     </div>
//   );
// };

// export default Sidebar;




// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import './Sidebar.css';

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   const handleResize = () => {
//     setIsMobile(window.innerWidth <= 768);
//     if (window.innerWidth > 768) {
//       setIsCollapsed(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div className={`sidebar ${isCollapsed ? 'collapsed' : ''} `}>
//       <div className="sidebar-header">
//         <button className="toggle-btn" onClick={toggleSidebar}>
//           ☰
//         </button>
//         {!isCollapsed && !isMobile && <img src="./Logo.png" className="logo" alt="Logo" />}
//       </div>

//       <ul className="sidebar-menu">
//         <li>
//           <NavLink to="/" activeClassName="active">
//             <img src="./dashboard-icon.svg" alt="Dashboard" />
//             {!isCollapsed && <span>Dashboard</span>}
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/fileUpload" activeClassName="active">
//             <img src="./data-icon.svg" alt="Upload" />
//             {!isCollapsed && <span>Upload</span>}
//           </NavLink>
//         </li>
//         {/* <li>
//           <NavLink to="/analytics" activeClassName="active">
//             <img src="./analytics-icon.svg" alt="Analytics" />
//             {!isCollapsed && <span>Analytics</span>}
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/summary" activeClassName="active">
//             <img src="./settings-icon.svg" alt="Summary" />
//             {!isCollapsed && <span>Summary</span>}
//           </NavLink>
//         </li> */}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
    if (!mobile) {
      setIsCollapsed(false);
    } else {
      setIsCollapsed(true); 
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const sidebarClass = `sidebar ${isMobile ? (isCollapsed ? 'collapsed' : 'open') : (isCollapsed ? 'collapsed-desktop' : '')}`;

  const handleLinkClick = () => {
    if (isMobile) {
      setIsCollapsed(true);
    }
  };

  return (
    <>
      {isMobile && (
        <button className="toggle-btn-mobile" onClick={toggleSidebar}>
          ☰
        </button>
      )}

      <div className={sidebarClass}>
        <div className="sidebar-header">
          {/* {!isMobile && (
            <button className="toggle-btn-desktop" onClick={toggleSidebar}>
              ☰
            </button>
          )}
          {!isCollapsed && <img src="./Logo.png" className="logo" alt="Logo" />} */}
          <img src="./Logo.png" className="logo" alt="Logo" />
        </div>

        <ul className="sidebar-menu">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>
              <img src="./dashboard-icon.svg" alt="Dashboard" />
              {!isCollapsed && <span>Dashboard</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/fileUpload" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLinkClick}>
              <img src="./data-icon.svg" alt="Upload" />
              {!isCollapsed && <span>Upload</span>}
            </NavLink>
          </li>
        </ul>

        {isMobile && !isCollapsed && <div className="sidebar-backdrop" onClick={toggleSidebar}></div>}
      </div>
    </>
  );
};

export default Sidebar;
