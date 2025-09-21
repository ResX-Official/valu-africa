import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";

// Ensure light mode on initial load
if (typeof window !== 'undefined') {
  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== 'light') {
      localStorage.setItem('theme', 'light');
    }
    document.documentElement.classList.remove('dark');
  } catch {}
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
