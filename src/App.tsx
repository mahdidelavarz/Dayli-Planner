import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPlanModal from "./components/cretePlan-parts/CreateNewPlan";
import Layout from "./Layout/Layout";
import { Icon } from "@iconify/react";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create-plan" element={<NewPlanModal />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


