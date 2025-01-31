import Navbar from "./components/shared/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ParticleBackground from "./components/ParticleBackground";
import Footer from "./components/shared/Footer";
import Certifications from "./components/Certifications";

function App() {
    return (
        <div className="app-wrapper">
            <ParticleBackground />
            <main>
                <Navbar />
                <Home />
                <Skills />
                <Projects />
                <Certifications />
            </main>
            <Footer />
        </div>
    );
}

export default App;
