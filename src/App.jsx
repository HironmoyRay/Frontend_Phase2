import { useState } from "react";
import Gallery from "./assets/components/Gallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Gallery/>
  );
}

export default App;
