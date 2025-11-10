import { useState } from "react";
import api from "../services/api";
import type Session from "../types/Session";
import { useSession } from "../contexts/SessionContext";

export default function LoginPage() {
  const { signIn } = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setIsLoading(true);

      const loginData = {
        username,
        password,
      };

      const { data } = await api.post<Session>("/auth/login", loginData);
      const sessionUser = { _id: data.user._id };
      signIn({ ...data, user: sessionUser });
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
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
        </div>
      </form>
    </main>
  );
}
