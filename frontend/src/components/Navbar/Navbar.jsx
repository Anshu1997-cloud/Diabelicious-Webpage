import React, { useState, useEffect } from 'react';
import logo from "../../images/logoNew.jpeg";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { CiLogin } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleNavbar = () => setToggleMenu(!toggleMenu);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id='navbar'>
            <div className='container navbar-content flex'>
                <div className='brand-and-toggle flex flex-sb'>
                    <Link to="/" className='navbar-brand flex'>
                        <img src={logo} alt="site logo"  size={10}/>
                        <span className='text-uppercase fw-7 fs-24 ls-1'>Diabelicious</span>
                    </Link>
                    <button
                        type="button"
                        className='navbar-toggler-btn'
                        onClick={handleNavbar}
                        aria-label="Toggle navigation"
                    >
                        <HiOutlineMenuAlt3
                            size={35}
                            style={{
                                color: `${toggleMenu ? "#fff" : "#010101"}`
                            }}
                        />
                    </button>
                </div>

                <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to="/mentorship" className='nav-link text-uppercase fw-7 ls-1' id='text'>
                                Mentorship
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/personalised-delivery" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' id='text'>
                                Delivery
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/pricing" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' id='text'>
                                Pricing
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/faq" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' id='text'>
                                FAQ
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/blog" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' id='text'>
                                Blog
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/about-us" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' id='text'>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/register" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'id='text'>
                                <CiLogin size={40} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;