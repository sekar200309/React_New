
// // import React from 'react';
// // import { Link } from 'react-router-dom'
// // import './Navbar.css';
// // import logo from './logo.jpg'; 

// // const Navbar = () => {
// //   return (
// //     <nav className="navbar">
// //      <Link to="/" className='logo'>
// //         <img src={logo} alt="Logo" className="logo-img" /> {/* Add your logo image */}
// //       </Link>
// //      <ul>
// //       <Link to="/" className='home'>
// //         <li>Home</li>
// //       </Link>
      
      
// //       <Link to="./map" className='map'>
// //         <li>Interactivemap</li>
// //       </Link>
// //       <Link to="./adfeature" className='adfeature'>
// //         <li>advance feature</li>
// //       </Link>
// //       <Link to="./predictive" className='predictive'>
// //         <li>predictive maintainance</li>
// //       </Link>
// //       <Link to="./Reporting" className='reporting'>
// //         <li>Reporting</li>
// //       </Link>
// //       <Link to="./dashboard" className='dashboard'>
// //         <li>Dashboard</li>
// //       </Link>
      
// //      </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import logo from './logo.jpg';

// const Navbar = () => {
//   // Function to handle click on Predictive Maintenance link
//   const handlePredictiveClick = () => {
//     // Redirect the user to the HTML page for Predictive Maintenance
//     window.location.href = '/html/espapp.html';
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo">
//         <img src={logo} alt="Logo" className="logo-img" />
//       </Link>
//       <ul>
//         <Link to="/" className="home">
//           <li>Home</li>
//         </Link>
//         <Link to="./map" className="map">
//           <li>Interactive Map</li>
//         </Link>
//         <Link to="./adfeature" className="adfeature">
//           <li>Advanced Feature</li>
//         </Link>
//         <li onClick={handlePredictiveClick} className="predictive">
//           Predictive Maintenance
//         </li>
//         <Link to="./reporting" className="reporting">
//           <li>Reporting</li>
//         </Link>
//         <Link to="./dashboard" className="dashboard">
//           <li>Dashboard</li>
//         </Link>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.jpg';

const Navbar = () => {
  // Function to handle click on Predictive Maintenance link
  const handlePredictiveClick = () => {
    // Redirect the user to the HTML page for Predictive Maintenance
    window.location.href = '/html/espapp.html';
  };
  const handleAdfeatureClick = () => {
    // Redirect the user to the HTML page for Predictive Maintenance
    window.location.href = '/html/grahp.html';
  };
  const handleReportingClick = () => {
    // Redirect the user to the HTML page for Predictive Maintenance
    window.location.href = '/html/report.html';
  };
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </Link>
      <ul>
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/map" className="map">
          <li>Interactive Map</li>
        </Link>
        <Link onClick={handleAdfeatureClick} className="adfeature">
          <li>Advanced Feature</li>
        </Link>
        <li onClick={handlePredictiveClick} className="predictive">
          Predictive Maintenance
        </li>
        <Link onClick={handleReportingClick} className="reporting">
          <li>Reporting</li>
        </Link>
        <Link to="/dashboard" className="dashboard">
          <li>Dashboard</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
