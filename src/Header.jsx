import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Header({handleLogout}){

    return (
        <div id="header">
            <div id="header-top">
                <h2 id="title">DEBANK</h2>
                <Button size="lg" onClick={handleLogout}>Logout</Button>
            </div>
            <nav>
                <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/randomTest">Tạo đề thi</Link>
                </li>
                <li>
                    <Link to="/randomQuestion">Tạo câu hỏi</Link>
                </li>
                <li>
                    <Link to="/news">Tin tức</Link>
                </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header