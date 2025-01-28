import "../styles/Home.css";
import profileImage from "../assets/image.png";

function Home() {
    return (
        <section id="home-section">
            <div className="home-content">
                <div className="hero-container">
                    <h1 className="intro">Hey, I’m Rita!</h1>
                    <h2>
                        Engineer by day, creative problem-solver always. Dive
                        into my portfolio and see how I turn ideas into
                        solutions.
                    </h2>
                    <p>
                        Automation and Software Engineering student adept at
                        coding and development of electromechanical systems.
                        Experienced with project optimization through time
                        management and innovative problem-solving. Skilled with
                        troubleshooting and data-analysis through Python, Java,
                        and C/C. Skilled in implementing Microsoft applications
                        and Linux repositories.
                    </p>
                    <div className="button-container">
                        <a href="">View Work</a>
                    </div>
                </div>
                <div className="profile-blob">
                    <img
                        src={profileImage}
                        alt="Rita's profile"
                        className="profile-image"
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;
