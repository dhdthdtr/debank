import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Header({handleLogout}){
    return (
        <header id="header">
            <div id="header-top">
                <h2 id="title">DEBANK</h2>
                <nav id="nav-bar">
                    <Link to="/home" className="nav-item">Home</Link>
                    <Link to="/randomTest" className="nav-item">Tạo đề thi</Link>               
                    <Link to="/randomQuestion" className="nav-item">Tạo câu hỏi</Link>               
                    <Link to="/news" className="nav-item">Tin tức</Link>
                </nav>
                <Button size="lg" onClick={handleLogout}>Logout</Button>
            </div>
        </header>
    )
}

export default Header