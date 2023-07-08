import React, { useState, useEffect } from 'react';
import './Preloader.css';
import propeller from './prop3.webp';

const Preloader = () => {
    const [showPopup, setShowPopup] = useState(true);
    const [nodisplay, setNodisplay] = useState(false);
    //eslint-disable-next-line
    const messages = [
        " We are Aero ♾️",
        " And... Prepare for takeoff ✈️",
        " - Fasten your seat belts -💺",
        " Exploring new horizons... 🌃",
        " Ready for adventure ? ⭐",
        " Embrace the sky! 🌠",
    ];
    const [randomMessage, setRandomMessage] = useState(
        messages[Math.floor(Math.random() * messages.length)]
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setRandomMessage(messages[Math.floor(Math.random() * messages.length)]);
        }, 3000);

        return () => clearInterval(interval);
    }, [messages]);

    setTimeout(() => {
        setNodisplay(true);
    }, 2000);

    return (
        <>
            <div
                className={`${nodisplay ? 'noDisp' : ''} preloader-popup ${showPopup ? 'show' : 'hide'
                    }`}
            >
                <img className="preloaderPropeller" src={propeller} alt="propeller" />
                <h2 style={{ paddingTop: '30px' }}>" {randomMessage}"</h2>
            </div>
        </>
    );
};

export default Preloader;