import React from 'react';
import logo from '../assets/images/logo.svg'
import arrow from '../assets/images/icon-arrow-down.svg'

function Header() {

    const handleClick = () => {
        const navToggle = document.querySelector('.mobile-nav');
        const navigation = document.querySelector('.primary-nav');

        navToggle.classList.toggle('open');
        navigation.classList.toggle('open');

    }
    
    return ( 
        <header className="header">
            <button type="button" className="mobile-nav" aria-controls='mobile-navigation' onClick={handleClick}><span className="sr-only">mobile navigation</span></button>
            <nav className="navbar">
            <img src={logo} alt="sunnyside logo" className="logo"/>
                <ul className="primary-nav">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#" id="contact">Contact</a></li>
                </ul>
            </nav>
            <h1 className="heading">We Are Creatives</h1>
            {/* <img src={arrow} alt="down arrow" className="arrow"/> */}
        </header>
     );
}

export default Header;