import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import TrainPage from "./pages/TrainPage";
import RechargePage from "./pages/RechargePage";
import WorkspacePage from "./pages/WorkspacePage";
import NutritionPage from "./pages/NutritionPage";
import GroupClassesPage from "./pages/GroupClassesPage";
import PersonalTrainingPage from "./pages/PersonalTrainingPage";
import SpecialtyProgramsPage from "./pages/SpecialtyProgramsPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-background min-h-screen flex flex-col text-on-surface font-sans antialiased">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/train" element={<TrainPage />} />
            <Route path="/recharge" element={<RechargePage />} />
            <Route path="/workspace" element={<WorkspacePage />} />
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="/group-classes" element={<GroupClassesPage />} />
            <Route path="/personal-training" element={<PersonalTrainingPage />} />
            <Route path="/specialty-programs" element={<SpecialtyProgramsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
