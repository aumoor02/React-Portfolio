import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from './components/Skills';

function App() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <About />
            <Skills />
        </div>
    );
}

export default App;
