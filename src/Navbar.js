import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => window.removeEventListener('scroll');
    }, []);

    return (
        <div className={`Navbar ${show && 'nav_black'}` }> 
            <img
                className="nav_logo"
                src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
                alt="Netflix Logo"
            />
            <img
                className="nav_avatar"
                src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
                alt="User Logo"
            />
        </div>
    );
};

export default Navbar;