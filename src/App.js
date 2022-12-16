import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Common/Navbar";
import ParticlesComponent from "./components/Particles";
import DashboardPage from "./pages/Dashboard";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
import PrivaiteRoute from "./PrivaiteRoute";
import LoginPage from "./pages/Login/index";
import EditPage from "./pages/EditPage";
import AddProject from "./pages/AddProject";

function App() {
  return (
    <div className="App bg-slate-900 text-white">
      <main className="flex flex-col gap-8 mx-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivaiteRoute>
                <DashboardPage />
              </PrivaiteRoute>
            }
          />
          <Route path="/dashboard/edit/:id" element={<EditPage />} />
          <Route path="/dashboard/add" element={<AddProject />} />
        </Routes>
      </main>
      <ParticlesComponent />
    </div>
  );
}

export default App;
