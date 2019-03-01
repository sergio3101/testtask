import React from "react";

const Header = props => (
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand">WebSiteName</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Profile</a></li>
                <li><a href="#"><span className="glyphicon glyphicon-plus"></span> Create</a></li>
                <li><a href="http://localhost:8000/admin/logout"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
            </ul>
        </div>
    </nav>
);

export default Header;