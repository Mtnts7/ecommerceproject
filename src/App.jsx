import "./index.css";
import HomePage from "./pages/HomePage";

function App() {
  const slides = [];

  return (
    <div>
      <HomePage key={slides} />
    </div>
  );
}

export default App;
