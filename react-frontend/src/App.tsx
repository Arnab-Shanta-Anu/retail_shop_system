import { Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Store from "./views/store";
import About from "./views/about";
import Navbar from "./components/navbar";

function App() {
    return (
        <>
            <Navbar />
            <div className="mb-4 mx-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default App;
