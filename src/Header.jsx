import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Header({handleLogout}){

    return (
        <div id="header">
            <div id="header-top">
                <div id="blank"></div>
                <h2 id="title">DEBANK</h2>
                <Button size="lg" onClick={handleLogout}>Logout</Button>
            </div>
            <nav id="nav-bar">
                <ul>
                    <li>
                        <Link to="/home" className="nav-item">Home</Link>
                    </li>
                    <li>
                        <Link to="/randomTest" className="nav-item">Tạo đề thi</Link>
                    </li>
                    <li>
                        <Link to="/randomQuestion" className="nav-item">Tạo câu hỏi</Link>
                    </li>
                    <li>
                        <Link to="/news" className="nav-item">Tin tức</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header