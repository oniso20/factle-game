import React from "react";
import "../styles/styles.css";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#">
              <span className="material-symbols-outlined">help_center</span>
            </a>
          </li>
          <li>
            <a href="#">FACTLE</a>
          </li>
          <li>
            <a href="#">
              <span className="material-symbols-outlined">analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="material-symbols-outlined">settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
