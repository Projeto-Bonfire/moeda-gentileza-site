import informations from '../assets/Informations';
import React, { useState } from "react";
import Logo from '../assets/img/logo.svg';

function Nav() {
    const [menuVisible, setMenuVisible] = useState(false);

    const Click = () => {
        setMenuVisible(!menuVisible);
      }
  return (
    <div>
      <header>
        <div className="nav-bar">
          <img className="logo" src={Logo} alt="Logo" />
        </div>
        <nav>
          <div className="mobile-menu" onClick={Click}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>

          <div className="nav-list">
            {informations.map((item, index) => (
              <a href={`#${item.id}`} key={index}>
                {index === 0 || index === 1 ? null : item.id}
              </a>
            ))}
            <a href="#">Blog</a>
            <a href="#">Dúvida</a>
          </div>
        </nav>
      </header>
      <div className="line"></div>
    </div>
  );
}
// <id="duvidas">
// //information.map
// </>

export default Nav;