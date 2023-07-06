import React from "react"


const Footer = () => {

    let footerStyle = {
        backgroundColor: "#000",
        color: "white",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "30px",
        fontSize :"12px",
        fontFamily: '"Baloo Bhai 2","Poppins",sans-serif'
    }
    return (
        <>
            <section className="footer" style={footerStyle}>
                From Aero to Infinity ∞ 
            </section>

        </>
    )
}

export default Footer