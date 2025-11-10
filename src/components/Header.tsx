import { Link } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";
import { FaSignOutAlt, FaSchool } from "react-icons/fa";
import api from "../services/api";

export default function Header() {
  const { session, signOut } = useSession();

  async function handleLogout() {
    if (!session) {
      return;
    }
    try {
      await api.delete(`/auth/logout`, {
        data: { refreshToken: session.refreshToken },
      });
    } catch (error) {
      console.error(error);
    } finally {
      signOut();
    }
  }

  return (
    <header className="flex justify-between items-center gap-4 p-4 bg-sky-600 w-full">
      <div className="flex items-center gap-6">
        <FaSchool className="size-6 text-white" />
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/dashboard" className="flex py-2 text-white">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/alunos" className="flex py-2 text-white">
                Alunos
              </Link>
            </li>
            <li>
              <Link to="/turmas" className="flex py-2 text-white">
                Turmas
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <button onClick={handleLogout} className="text-white">
        <FaSignOutAlt />
      </button>
    </header>
  );
}
