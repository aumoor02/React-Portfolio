import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";

function App() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <About />
        </div>
    );
}

export default App;
