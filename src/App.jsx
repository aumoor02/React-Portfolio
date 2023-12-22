import {useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
    const scrollRef = useRef();

    return (
        <div>
            <header>
                <Header scrollRef={scrollRef} />
            </header>
            <div ref={scrollRef}>
                <About />
            </div>
            <Skills />
            <Projects />
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
