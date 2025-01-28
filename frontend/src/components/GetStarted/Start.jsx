import './Start.css'

export default function Start() {
    const scrollToContact = () => {
        const element = document.getElementById("ContactH");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            {/* Get started */}
            <div className="infoContainer">
                <div className="infoImg">
                    <img className="dogImg2" src="../../img/dogImg2.jpg" alt="dog" />
                </div>
                <div className="infoBox">
                    <div className="information">
                        <h2 className="header2">Get Started</h2>
                    </div>
                    <div className="startingContainer">
                        <p>・Explain step1</p>
                        <p>・Explain step2</p>
                        <p>・Explain steo3</p>
                    </div>
                    <div className="buttonBox">
                        <button onClick={scrollToContact} className="btn">Contact Page</button>
                    </div>
                </div>
            </div>
        </>
    );
}