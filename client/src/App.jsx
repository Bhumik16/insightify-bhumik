// client/src/App.jsx
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import OnBoarding1 from "./pages/OnBoarding/OnBoarding1";
import OnBoarding2 from "./pages/OnBoarding/OnBoarding2";
import OnBoarding3 from "./pages/OnBoarding/OnBoarding3";
// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import VoiceAgent from "./pages/VoiceAgent";
import Profile from "./pages/Profile";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Landing />
            </Layout>
          } />
          <Route path="/login" element={<Login />} />

          {/* Authenticated Routes with Layout */}
          <Route path="/dashboard" element={
            <Layout>
              <Dashboard />
            </Layout>
          } />

         <Route path="/onboarding" element={<OnBoarding1 />} />
   <Route path="/onboarding/step-2" element={<OnBoarding2 />} />
   <Route path="/onboarding/step-3" element={<OnBoarding3 />} />

          <Route path="/voice-agent" element={
            <Layout>
              <VoiceAgent />
            </Layout>
          } />

          <Route path="/profile" element={
            <Layout>
              <Profile />
            </Layout>
          } />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;