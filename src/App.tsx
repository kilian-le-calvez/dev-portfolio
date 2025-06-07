import React from "react";
import { Timeline } from "./components/Timeline";
import portfolioData from "./portfolioData";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Timeline data={portfolioData} />
    </div>
  );
}

export default App;
