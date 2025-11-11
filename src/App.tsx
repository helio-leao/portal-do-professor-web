import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SessionProvider } from "./contexts/SessionContext";
import GuestLayout from "./layouts/GuestLayout";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AlunosPage from "./pages/AlunosPage";
import TurmasPage from "./pages/TurmasPage";
import NovoAlunoPage from "./pages/NovoAlunoPage";
import EditarAlunoPage from "./pages/EditarAlunoPage";

function App() {
  return (
    <SessionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route element={<GuestLayout />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/alunos" element={<AlunosPage />} />
            <Route path="/alunos/novo" element={<NovoAlunoPage />} />
            <Route path="/alunos/:id/editar" element={<EditarAlunoPage />} />
            <Route path="/turmas" element={<TurmasPage />} />
          </Route>
        </Routes>
      </Router>
    </SessionProvider>
  );
}

export default App;
