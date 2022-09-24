import { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchData = async () =>
      await axios.get("https://jsonplaceholder.typicode.com/users");
    fetchData();
  }, []);

  const [count, setCount] = useState(0);

  return <div className="App">Hello</div>;
}

export default App;
