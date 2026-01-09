// client/src/App.jsx
import { AuthProvider } from "./context/authcontext"; // <--- 1. Import this
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Your existing page imports
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import VoiceAgent from "./pages/VoiceAgent";
import Profile from "./pages/Profile";

function App() {
  return (
    // 2. Wrap EVERYTHING in AuthProvider
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/voice-agent" element={<VoiceAgent />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;