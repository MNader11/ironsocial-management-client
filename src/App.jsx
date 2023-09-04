import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignupPage from "./Pages/Signup";
import LoginPage from "./Pages/Login";
import TicketsList from "./Pages/TicketsList";
import AddTicket from "./Pages/AddTicket";
/* import EditTicket from "./Pages/EditTicket"; */
import CoworksList from "./Pages/CoworksList";
import AppsList from "./Pages/AppsList";
import ProjectsList from "./Pages/ProjectsList";
import HomePage from "./Pages/HomePage";
import IsAnon from "./Components/isAnon";
import IsPrivate from "./Components/isPrivate";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/"
          element={
            <IsAnon>
              <HomePage />
            </IsAnon>
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
        <Route
          path="/login"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />
        <Route
          path="/"
          element={
            <IsPrivate>
              <TicketsList />
            </IsPrivate>
          }
        />
        <Route
          path="/tickets"
          element={
            <IsPrivate>
              <TicketsList />
            </IsPrivate>
          }
        />
        <Route
          path="/tickets/create"
          element={
            <IsPrivate>
              <AddTicket />
            </IsPrivate>
          }
        />
        <Route
          path="/coworks"
          element={
            <IsPrivate>
              <CoworksList />
            </IsPrivate>
          }
        />
        <Route
          path="/apps"
          element={
            <IsPrivate>
              <AppsList />
            </IsPrivate>
          }
        />
        <Route
          path="/projects"
          element={
            <IsPrivate>
              <ProjectsList />
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
