import React from "react"


const Footer = () => {

    let footerStyle = {
        backgroundColor: "#000",
        color: "white",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "42px",
        fontSize :"15px",
        fontFamily: '"Baloo Bhai 2","Poppins",sans-serif'
    }
    return (
        <>
            <section className="footer" style={footerStyle}>
                From Aero to Infinity <span style={{color : "#07b1fb", fontSize : "18px", fontWeight : 800}}>&nbsp; ∞</span> 
            </section>

        </>
    )
}

export default Footer