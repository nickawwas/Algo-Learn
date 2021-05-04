import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {NavData} from './NavData';

import "./Navbar.css"

const Navbar = () => {
    // Open and Close Nav Bar
    const [navState, setNavState] = useState(false);
    const toggleNav = () => setNavState(!navState);

    // Using Path to Update Tab on Reload
    const { pathname } = useLocation();
    const [currentTab, setCurrentTab] = useState(pathname);
    
    return (
        <header>
            <Link to="/" className="logo" onClick={() => setCurrentTab('/')}>  
                algo 
            </Link>   

            <nav className={navState ? 'nav open' : 'nav'}>
                <ul className="nav-list" onClick={toggleNav}>
                    {NavData.map((item, key) => {
                        return (
                            <li className={currentTab === item.path ? 'nav-items current-tab' : 'nav-items'} key={key} onClick={() => setCurrentTab(item.path)}>
                                <Link to={item.path}> 
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    
                    <li className="nav-items">
                        <Link to="/contact"> 
                            <button className={currentTab === '/contact' ? "contact-button current-tab" : 'contact-button'} onClick={() => setCurrentTab('/contact')}> 
                                Contact 
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
            
            <svg className={navState ? 'arrow clicked' : 'arrow'} onClick={toggleNav}
                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"/>
            </svg>
		</header>
    )
}

export default Navbar
