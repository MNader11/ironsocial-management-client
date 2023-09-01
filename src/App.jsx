import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignupPage from "./Pages/Signup";
import LoginPage from "./Pages/Login";
import IsAnon from "./Components/isAnon";
import IsPrivate from "./Components/isPrivate";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/signup"
          element={
            
              <SignupPage />
            
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
