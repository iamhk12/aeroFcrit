import React from "react"
import Nav from '../components/Nav'
import planeImage from '../components/plane_home.png'
import './Home.css'
import Footer from "../components/Footer"
import 'animate.css';
import Preloader from "../components/Preloader";
const Home = () => {
    return (
        <>
            <Nav />
            <Preloader />
            <div className="homePage">
                <div className="hero">

                    <div className="homeLeft">
                        <div className="homeLeftContent">
                            <h1 className="animate__animated animate__fadeInUp animate__delay-2s gradientText">AERO FCRIT</h1>
                            <h3 className="animate__animated animate__fadeInUp animate__delay-2s subText">A Place Where Innovation Meets Aviation</h3>
                        </div>
                    </div>
                    <div className="homeRight">
                        <img className="animate__animated animate__fadeInUp animate__delay-2s planeImage" src={planeImage} alt="Plane" />
                    </div>
                </div>

                <div className="aboutSection">
                    <h1>About Us</h1>
                    <div className="abContent">
                        <p>We specialize in designing, innovating, building, and testing fixed-wing UAVs and drones.</p>
                        <p>Our primary focus is participating in the SAE DDC and ADDC competitions.</p>
                        <p>These competitions compress a full year of aircraft development, including system engineering and other crucial stages.</p>
                        <p>Throughout the process, we prioritize networking, learning, and collaboration among members from different disciplines.</p>
                        <p>Our aim is to provide students with an enriching learning journey and help them gain technical expertise, management skills, and notable achievements.</p>
                        <p>Each year, we strive to acquire knowledge and make significant advancements, aiming to stay at the forefront of the field.</p>
                        <p>By building superior aircraft and drones and making valuable contributions to society, we aim to shape the future of aviation.</p>

                    </div>
                </div>



            </div>
            <Footer />
        </>
    )
}

export default Home