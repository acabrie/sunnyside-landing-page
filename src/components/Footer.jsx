import logo from '../assets/images/logo.svg'
import facebook from '../assets/images/icon-facebook.svg'
import instagram from '../assets/images/icon-instagram.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'

function Footer() {
    return ( 
        <footer className="footer">
            <img src={logo} alt="sunnyside logo" className="footer-logo"/>
            <ul className="footer-nav">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
            <div className="icons">
               <span><img src={facebook} className="social-icons"/></span>
               <span><img src={instagram} className="social-icons"/></span>
               <span><img src={twitter} className="social-icons"/></span>
               <span><img src={pinterest} className="social-icons"/></span> 
            </div>
        </footer> 
    );
}

export default Footer;