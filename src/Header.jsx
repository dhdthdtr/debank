import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

function Header(props){
    const openProfileBox = (e) => {
        e.preventDefault();
    }

    return (
        <header id="header">
            <div id="header-top">
                <h2 id="title">DEBANK</h2>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div id="notification-icon">
                        <a href="" onClick={openProfileBox} id="icon">
                            <FontAwesomeIcon size="2x" icon={faBell}/>
                        </a>
                        <div id="noti-box">
                            
                        </div>
                    </div>
                    {/* <button id="logoutBtn" onClick={props.handleLogout}>Logout</button> */}
                    Welcome,&nbsp;
                    <a href="" onClick={openProfileBox}>Bằng Nguyễn</a>
                </div>
            </div>
            <div id="nav-box">
                <nav id="nav-bar">
                    <Link to="/home" className="nav-item">Home</Link>
                    <Link to="/randomTest" className="nav-item">Tạo đề thi</Link>               
                    <Link to="/randomQuestion" className="nav-item">Tạo câu hỏi</Link>               
                    <Link to="/news" className="nav-item">Tin tức</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header