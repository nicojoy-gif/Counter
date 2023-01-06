import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

function Nav() {
  return (
    <div className="counter-home">
      <nav className="count-nav">
        <div className="count-logo">
          <img
            src="data:image/png;base64,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"
            alt="counter-logo"
          />
        </div>
        <ul className="count-lists">
          <li className="count-list">
            <Link className="countss" to="/">
              Home
            </Link>
          </li>
          <li className="count-list">
            <Link className="countss" to="/UseCounter">
              customHooks
            </Link>
          </li>
          <li className="count-list">
            <Link className="countss" to="/Reducer">
              useReducer
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
