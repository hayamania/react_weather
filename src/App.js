import "./App.css";
import "./Weather";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Perth" />
      <footer>
        <p>
          This project is{" "}
          <a
            href="https://github.com/hayamania/react_weather"
            target={"_blank"}
            rel="noreferrer"
          >
            open-sorced
          </a>{" "}
          and coded by Chie HYM and hosted on{" "}
          <a
            href="https://neon-toffee-80dd0b.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            Netrify
          </a>
        </p>
      </footer>{" "}
    </div>
  );
}

export default App;
