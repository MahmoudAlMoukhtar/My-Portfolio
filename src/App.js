import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Common/Navbar";
import ParticlesComponent from "./components/Particles";
import DashboardPage from "./pages/Dashboard";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";

function App() {
  return (
    <div className="App bg-slate-900 text-white">
      <main className="flex flex-col gap-8 mx-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
      <ParticlesComponent />
    </div>
  );
}

export default App;
