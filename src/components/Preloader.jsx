import React, { useState, useEffect } from 'react';
import './Preloader.css';
import propeller from './prop3.webp'
const Preloader = () => {
    const [showPopup, setShowPopup] = useState(true);
    const [nodisplay, setnodisplay] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    setTimeout(() => {
        setnodisplay(true);
    }, 1700);

    return (
        <>
            <div className={`${nodisplay ? 'noDisp' : ''} preloader-popup ${showPopup ? 'show' : 'hide'}`}>
                <img className='preloaderPropeller' src={propeller} alt='propeller' />
                <h2 style={{paddingTop : "30px"}}>
                    "We are Aero ♾️"
                </h2>
            </div>
            {/* Rest of your page content */}
        </>
    );
};

export default Preloader;