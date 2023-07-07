import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import planeImage from "../components/plane_home.png";
import "./Home.css";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const Home = () => {
    const [emojiIndex, setEmojiIndex] = useState(0);
    const emojis = ["✈️", "", "🚀", "", "🛩️", "", "🛫", "", "🛬", "", "✈️️️", "", "🚁", "", "🪂", "", "💯", "", "💡", ""];

    useEffect(() => {
        const interval = setInterval(() => {
            setEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Nav />
            <Preloader />
            <div className="homePage">
                <div className="hero">
                    <div className="homeLeft">
                        <div className="homeLeftContent">
                            <h1 className="animate__animated animate__fadeInLeft animate__delay-2s gradientText">
                                AERO FCRIT
                            </h1>
                            <h3 className="animate__animated animate__fadeInLeft animate__delay-2s subText">
                                A Place Where Innovation Meets Aviation
                            </h3>
                            <div className="cursorEffect"></div>
                            <h2 className="animate__animated animate__fadeInLeft animate__delay-2s">
                                {emojis[emojiIndex]}
                                <span className="cursor"></span>
                            </h2>
                        </div>
                    </div>
                    <div className="homeRight">
                        <img
                            className="animate__animated animate__fadeInRight animate__delay-2s planeImage"
                            src={planeImage}
                            alt="Plane"
                        />
                    </div>
                </div>

                <div className="mapSection ">
                    <h1>Meet & Greet Us @</h1>
                    <div class="mapouter"><div class="gmap_canvas"><iframe title="aeroMap" class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=658&amp;height=320&amp;hl=en&amp;q=Fcrit&amp;t=p&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://thepasswordgame.com/">Password Game</a></div></div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;