import React from "react";
import Routes from "./Routes";
import BackgroundCanvas from "./components/BackgroundCanvas";

function App() {
  return (
    <div className="app-bg min-h-screen">
      <BackgroundCanvas />
      <Routes />
    </div>
  );
}

export default App;
