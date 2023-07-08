import React from "react"
import './AboutUs.css'
import Nav from "../components/Nav"
import teamImg from "../components/aero_team.jpg";
import teamGaruda from "../components/teamGaruda.png";
// import Preloader from "../components/Preloader";
import aeroLogo from "../components/logo.png"
import Footer from "../components/Footer";

const AboutUs = () => {
    return (
        <>
            <Nav />
            {/* <Preloader /> */}
            <div className="aboutPage ">
                <div className="aboutSection ">
                    <h1 className="animate__animated animate__fadeInUp  aeroh1">AERO FCRIT</h1>
                    <div className="abContent animate__animated animate__fadeInUp ">
                        <div className="abRight">
                            <img src={teamImg} className="teamImg" alt="team_aero" />
                        </div>
                        <div className="abLeft animate__animated animate__fadeInUp" >
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
                <div className="centeringdiv " style={{background : "#041d4f"}} ><hr style={{ margin: 0, border: "2px solid #fff" , width : "50%"}} className="animate__animated animate__fadeInUp animate__delay-1s"/></div>
                <div className="aboutSection garuda animate__animated animate__fadeIn ">
                    <h1 className="animate__animated animate__fadeInUp garudah1">TEAM GARUDA</h1>
                    <div className="abContent reverseFlex animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="abRight">
                            <img src={teamGaruda} className="garudaImg" alt="team_aero" />
                        </div>
                        <div className="abLeft">
                            <p>
                                Team Garuda participates in SAEISS
                                Drone Development Challenge(DDC) which is
                                a pan-India competition, conducted
                                every year.
                            </p>
                            <p>
                                It provides opportunities to showcase
                                extraordinary talents to conceive,
                                design and develop a prototype of a
                                fixed-wing UAV.
                            </p>
                            <p>
                                Both Mechanical and Electrical
                                departments contributes to the team.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="centeringdiv" style={{background : "#062668"}} ><hr style={{ margin: 0, border: "2px solid #fff" , width : "50%"}} /></div>

                <div className="aboutSection thrsl">
                    <h1 className="animate__animated animate__fadeInUp animate__delay-2s thrslh1">TEAM THESTRAL</h1>
                    <div className="abContent reverseFlex2 animate__animated animate__fadeInUp animate__delay-2s">
                        <div className="abRight">
                            <img src={aeroLogo} className="thrslImg" alt="team_aero" />
                        </div>
                        <div className="abLeft">
                            <p>
                                Team Thestral is involved in the SAEISS Autonomous Drone Development Challenge (ADDC), an annual competition held in India.
                            </p>
                            <p>
                                This event serves as a platform for participants to demonstrate their exceptional skills in conceptualizing, designing, and building a drone prototype.
                            </p>
                            <p>
                                Mechanical, Electrical, Computer and IT departments contributes to the team
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs