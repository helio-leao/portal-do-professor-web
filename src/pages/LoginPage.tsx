import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <main className="flex flex-col grow max-w-sm p-4">
      <h1 className="mb-4">Login</h1>

      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <div className="flex flex-col gap-4">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="border p-4 rounded-lg"
            id="username"
            placeholder="Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="border p-4 rounded-lg"
            id="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex gap-2 mt-4">
          <button
            disabled={isLoading}
            className="bg-sky-600 rounded-lg px-4 py-2 self-start text-white"
          >
            Login
          </button>
          <Link
            to="/signup"
            className="bg-sky-600 rounded-lg px-4 py-2 self-start text-white"
          >
            Signup
          </Link>
        </div>
      </form>
    </main>
  );
}
