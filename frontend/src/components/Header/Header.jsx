import React, {useState, useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import fit1 from '../../images/fit1.jpg';
import fit2 from '../../images/fit2.jpg';
import fit3 from '../../images/fit3.jpg';
import fit4 from '../../images/fit4.jpg';
import fit5 from '../../images/fit5.jpg';

const images = [fit1, fit2, fit3, fit4, fit5];

const Header = () => {
    const [text] = useTypewriter({
        words: ['with our ultra-healthy dishes.'],
        loop: true, 
        typeSpeed: 120,
        deleteSpeed: 10,
    });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='holder'>
            <header className='header'>
                <Navbar />
                <div className='header-content flex flex-c text-center text-white'>
                    <h2 className='header-title text-capitalize'>
                        Taste the Health
                    </h2><br />
                    <h1 className="container">
                    <div
            className="background"
            style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                transition: 'background-image 1s ease-in-out'
            }}
        >
        </div>
                        <span className='text first-text'>Experience the true taste of Indian cuisine {' '}</span>
                        <span className='text sec-text'>{text}</span>
                        <span style={{color: 'Yellow'}}>
                            <Cursor cursorStyle="|" />
                        </span>
                    </h1>
                    <button><span>Subscribe</span></button>
                </div>
            </header>
        </div>
    );
};

export default Header;