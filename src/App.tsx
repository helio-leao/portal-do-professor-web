import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SessionProvider } from "./contexts/SessionContext";
import GuestLayout from "./layouts/GuestLayout";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <SessionProvider>
      <Router>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </SessionProvider>
  );
}

export default App;
