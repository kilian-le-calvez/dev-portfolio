import React from "react";
import { Routes, Route } from "react-router-dom";
import { Timeline } from "./components/timeline/Timeline";
import portfolioData from "./portfolioData";
import ProfilePage from "./components/profile/ProfilePage";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route path="/" element={<Timeline data={portfolioData} />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
