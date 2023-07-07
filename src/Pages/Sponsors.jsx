import React from "react"
import './Sponsors.css'
import Nav from "../components/Nav"
import Preloader from "../components/Preloader";
const Sponsors = () => {
    return (
        <>
            <Nav />
            <Preloader />
            <div className="spnsPage">
                <div className="spnsHero">
                    <h1>OUR SPONSORS</h1>
                </div>
            </div>
        </>
    )
}

export default Sponsors