import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
