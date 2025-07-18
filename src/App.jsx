import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import AuthPage from "./components/AuthPage";
import WelcomePage from "./components/WelcomePage";
import LetterPage from "./components/LetterPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AuthPage onAuth={() => setIsAuthenticated(true)} />} />
        <Route
          path="/welcome"
          element={isAuthenticated ? <WelcomePage /> : <Navigate to="/" />}
        />
        <Route
          path="/letter/:letter"
          element={isAuthenticated ? <LetterPage /> : <Navigate to="/" />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;