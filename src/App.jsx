import Navbar from "./components/shared/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    return (
        <main>
            <Navbar />
            <Home />
            <Skills />
            <Projects />
        </main>
    );
}

export default App;
