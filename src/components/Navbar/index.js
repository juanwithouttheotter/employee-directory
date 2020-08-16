import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                AmaZing Employee Directory!
        </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className={
                            window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-link active" : "nav-link"
                            }
                        >
                            Directory
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sort"
                        className={window.location.pathname === "/sort" ? "nav-link active" : "nav-link"}
                        >
                            Sort
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/filter"
                        className={window.location.pathname === "/filter" ? "nav-link active" : "nav-link"}
                        >
                            Filter
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;