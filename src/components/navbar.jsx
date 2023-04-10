import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";
import { navlink } from "../utils/data";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="apple logo" />
          </li>
          {navlink.map((link) => {
            return (
              <li>
                <a href="" className="link-styled" key={link.id}>
                  {link.title}
                </a>
              </li>
            );
          })}

          <li>
            <img src={Search} alt="search" />
          </li>

          <li>
            <img src={Store} alt="" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
