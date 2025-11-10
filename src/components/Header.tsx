import { Link } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";
import { FaSignOutAlt, FaSchool } from "react-icons/fa";

export default function Header() {
  const { session, signOut } = useSession();

  async function handleLogout() {
    if (!session) {
      return;
    }
    try {
      // TODO: call logout on API
      signOut();
    } catch (error) {
      alert(error);
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
          </ul>
        </nav>
      </div>

      <button onClick={handleLogout} className="text-white">
        <FaSignOutAlt />
      </button>
    </header>
  );
}
