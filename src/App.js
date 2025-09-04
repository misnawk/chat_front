import "./App.css";
import Chat from "./page/Chat";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
