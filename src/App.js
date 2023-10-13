import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <About />
            <Skills />
            <Projects />
            <Contact />
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
