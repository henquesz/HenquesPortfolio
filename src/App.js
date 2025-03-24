import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FullScreenDiv from "./Screens/Home"; // Ajuste o caminho se necessário
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FullScreenDiv />} />
      </Routes>
    </Router>
  );
}

export default App;
