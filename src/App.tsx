import { useEffect } from "react";
import Home from "./components/Home";
import "./app.css";

function App() {
  useEffect(() => {
    if (document) {
      document.title = "YT Tools";
    }
  }, [document]);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
