import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignupPage from "./Pages/Signup";
import LoginPage from "./Pages/Login";
import TicketsList from "./Pages/TicketsList";
import AddTicket from "./Pages/AddTicket";
import EditTicket from "./Pages/EditTicket";
import MyTickets from "./Pages/MyTickets";
import CoworksList from "./Pages/CoworksList";
import AppsList from "./Pages/AppsList";
import ProjectsList from "./Pages/ProjectsList";
import AddProject from "./Pages/AddProject";
import EditProject from "./Pages/EditProjects";
import MyProjects from "./Pages/MyProjects";
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
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
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
          path="/tickets/:ticketId/update"
          element={
            <IsPrivate>
              <EditTicket />
            </IsPrivate>
          }
        />
        <Route
          path="/profile/mytickets"
          element={
            <IsPrivate>
              <MyTickets />
            </IsPrivate>
          }
        />
        {
          <Route
            path="/profile/myprojects"
            element={
              <IsPrivate>
                <MyProjects />
              </IsPrivate>
            }
          />
        }
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
        <Route
          path="/projects/create"
          element={
            <IsPrivate>
              <AddProject />
            </IsPrivate>
          }
        />
        <Route
          path="/projects/:projectId/update"
          element={
            <IsPrivate>
              <EditProject />
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
