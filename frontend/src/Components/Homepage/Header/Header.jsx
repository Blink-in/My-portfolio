// import React from 'react';
// import "./Header.css";


// const Header = () => {
//   return (
//     <div className='head-container'>
      
//       <header className='header'>
// <button>About Me</button>
// <button>My Stacks</button>
// <button>Projects</button>
// <button>Contact</button>

//       </header>
//     </div>
//   )
// }

// export default Header

// ...existing code...
import React, { useState, useEffect } from 'react';
import "./Header.css";


const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 600) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (hash) => {
    setOpen(false);
    // navigate to section if exists, otherwise set hash
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.hash = hash;
  };

  return (
    <div className='head-container'>
      <header className='header'>
      

        <nav className="nav">
          <div className={`nav-links ${open ? "open" : ""}`}>
            <button onClick={() => handleNavClick("#about")}>About Me</button>
            <button onClick={() => handleNavClick("#stacks")}>My Stacks</button>
            <button onClick={() => handleNavClick("#projects")}>Projects</button>
            <button onClick={() => handleNavClick("#contact")}>Contact</button>
          </div>

          <button
            className="hamburger"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen(prev => !prev)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Header