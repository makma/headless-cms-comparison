import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="logo">
              <Link to="/">CMS Comparison</Link>
            </div>
          </div>
          <div className="col-6 text-right align-self-center">
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

// @ts-ignore
export default Navigation;
