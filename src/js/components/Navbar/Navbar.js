import React from 'react';

const IwashNavBar = () => {
    return (
        <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="//">WebSiteName</a>
                </div>
                <ul className="nav navbar-nav">
                <li className="active"><a href="//">Home</a></li>
                <li><a href="//">Page 1</a></li>
                <li><a href="//">Page 2</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                <li><a href="//"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
        </nav>
        </>
    );
};

export default IwashNavBar;