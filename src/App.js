import "./App.css";
import "./Weather";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <p>
          This project is{" "}
          <a
            href="https://github.com/hayamania/react_weather"
            target={"_blank"}
          >
            open-sorced
          </a>{" "}
          and coded by Chie HYM
        </p>
      </footer>{" "}
    </div>
  );
}

export default App;
