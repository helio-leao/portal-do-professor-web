import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import type Aluno from "../types/Aluno";

export default function NovoAlunoPage() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [turma, setTurma] = useState("");
  const [isAtivo, setIsAtivo] = useState(true);

  const [isSaving, setIsSaving] = useState(false);

  async function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const novoAluno: Aluno = {
      nome,
      email,
      turma,
      status: isAtivo ? "ATIVO" : "INATIVO",
    };

    try {
      setIsSaving(true);
      await api.post("/alunos", novoAluno);
      navigate(-1);
    } catch (error) {
      alert(error);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className="p-4 w-full max-w-screen-sm">
      <h1 className="mb-4">Novo Aluno</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSave}>
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Nome*</label>
          <input
            type="text"
            className="border p-4 rounded-lg"
            id="name"
            placeholder="nome do aluno"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="type">Email*</label>
          <input
            type="text"
            className="border p-4 rounded-lg"
            id="type"
            placeholder="exemplo@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="type">Turma*</label>
          <input
            type="text"
            className="border p-4 rounded-lg bg-gray-100"
            id="type"
            placeholder="work in progress"
            value={turma}
            disabled /* TODO: remove when functional */
            onChange={(e) => setTurma(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="ativo" className="flex items-center gap-2">
            Ativo*
          </label>
          <input
            type="checkbox"
            id="ativo"
            checked={isAtivo}
            onChange={(e) => setIsAtivo(e.target.checked)}
            className="w-5 h-5 accent-blue-600"
          />
        </div>

        <div className="flex gap-2 mt-4">
          <button
            disabled={isSaving}
            className="bg-sky-600 rounded-lg px-4 py-2 self-start text-white"
          >
            Save
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="bg-sky-600 rounded-lg px-4 py-2 self-start text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
}
