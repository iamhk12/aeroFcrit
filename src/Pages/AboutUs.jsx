import React from "react"
import './AboutUs.css'
import Nav from "../components/Nav"
import teamImg from "../components/aero_team.jpg";
import Preloader from "../components/Preloader";

const AboutUs = () => {
    return (
        <>
            <Nav />
            <Preloader/>
            <div className="aboutPage">
                <div className="aboutSection">
                    <h1 className="animate__animated animate__fadeInUp animate__delay-2s">AERO FCRIT</h1>
                    <div className="abContent animate__animated animate__fadeInUp animate__delay-2s">
                        <div className="abRight">
                            <img src={teamImg} className="teamImg" alt="team_aero" />
                        </div>
                        <div className="abLeft">
                            <p>
                                We specialize in designing, innovating, building, and testing
                                fixed-wing UAVs and drones.
                            </p>
                            <p>
                                Our primary focus is participating in the SAE DDC and ADDC
                                competitions.
                            </p>
                            <p>
                                These competitions compress a full year of aircraft development,
                                including system engineering and other crucial stages.
                            </p>
                            <p>
                                Throughout the process, we prioritize networking, learning, and
                                collaboration among members from different disciplines.
                            </p>
                            <p>
                                Our aim is to provide students with an enriching learning
                                journey and help them gain technical expertise, management
                                skills, and notable achievements.
                            </p>
                            <p>
                                Each year, we strive to acquire knowledge and make significant
                                advancements, aiming to stay at the forefront of the field.
                            </p>
                            <p>
                                By building superior aircraft and drones and making valuable
                                contributions to society, we aim to shape the future of
                                aviation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs