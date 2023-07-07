import React from "react"
import './Sponsors.css'
import Nav from "../components/Nav"
import Preloader from "../components/Preloader";
import spnSolid from '../components/sponsorSolidworks.png'
import spnAns from '../components/sponsorANSYS.png'
import spnTM from '../components/sponsorTMotor.png'
import spnSL from '../components/sponsorSmartLab.png'
import spnImp from '../components/sponsorImp.png'



const Sponsors = () => {
    return (
        <>
            <Nav />
            <Preloader />
            <div className="spnsPage">
                <div className="spnsHero">
                    <div className="spnContent">
                        <h1 className="animate__animated animate__fadeInUp animate__delay-2s">OUR SPONSORS</h1>

                        <div className="spnContentBox">
                            <img className="animate__animated animate__fadeInUp animate__delay-2s sponsorLogo" alt="sponsor" src={spnSolid} />
                            <img className="animate__animated animate__fadeInUp animate__delay-2s sponsorLogo ansys" alt="sponsor" src={spnAns} />
                            <img className="animate__animated animate__fadeInUp animate__delay-2s sponsorLogo" alt="sponsor" src={spnTM} />
                        </div>

                        <div className="spnContentBox">
                            <img className="animate__animated animate__fadeInUp animate__delay-2s sponsorLogo impSL" alt="sponsor" src={spnImp} />
                            <img className="animate__animated animate__fadeInUp animate__delay-2s sponsorLogo impSL" alt="sponsor" src={spnSL} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sponsors