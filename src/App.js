import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            <a
              href="https://github.com/latin-bubel/dictionary-project"
              title="Github repository"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            &nbsp;by&nbsp;
            <a
              href="https://pl.linkedin.com/in/estera-pietkiewicz-6b7558178?original_referer=https%3A%2F%2Fwww.google.com%2F"
              target="_blank"
              rel="noreferrer"
              title="Estera - Linkedin"
            >
              Estera Pietkiewicz
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
