import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import "../../App.css"

let btn, menu, overlay;
function Header() {
    useEffect(() => {
        btn = document.getElementById('menu-btn');
        overlay = document.getElementById('overlay');
        menu = document.getElementById('mobile-menu');
        return () => {

        }
    }, [])


    const navToggle = () => {
        btn.classList.toggle('open');
        overlay.classList.toggle('overlay-show');
        document.body.classList.toggle('stop-scrolling');
        menu.classList.toggle('show-menu');
    }
    return (
        <>
            <div id="overlay"></div>
            <div id="mobile-menu" className="mobile-main-menu">
                <ul>
                    <li><Link to="/history">History</Link></li>
                    <li> <Link to="/rockets">Rockets</Link></li>
                    <li><Link to="/launches">Launches</Link></li>
                </ul>
            </div>
            <header className="main-header">
                <div className="logo">
                    <Link to="/"><img src="/image/logo.png" alt="SpaceX" /></Link>
                </div>
                <nav className="desktop-main-menu">
                    <ul>
                        <li><Link to="/history">History</Link></li>
                        <li> <Link to="/rockets">Rockets</Link></li>
                        <li><Link to="/launches">Launches</Link></li>
                    </ul>
                </nav>
            </header>
            <button id="menu-btn" className="hamburger" type="button" onClick={() => navToggle()}>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
        </>
    )
}

export default Header