import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Restaurant } from "./Components/Restaurant";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Restaurant />
    </div>
  );
}

export default App;
