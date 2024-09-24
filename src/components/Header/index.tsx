import React from 'react';
import { NavLink } from 'react-router-dom';
import KasaLogo from '../../assets/KasaLogo';

const Header = () => {
  return (
    <header className="pageWrapper">
      <div className="headerWrapper">
        <div className="mainLogo">
          <KasaLogo
            propsColor="#FF6060"
            propsWidth={145}
            propsHeight={46}
          />
        </div>
        <nav className="navBar">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'navLink active' : 'navLink'
                }
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apropos"
                className={({ isActive }) =>
                  isActive ? 'navLink active' : 'navLink'
                }
              >
                A Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
