import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import LoadingIndicator from "../components/LoadingIndicator";
import type Aluno from "../types/Aluno";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

export default function AlunosPage() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        await fetchAlunos();
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  async function fetchAlunos() {
    try {
      const { data: alunos } = await api.get<Aluno[]>(`/alunos`);
      setAlunos(alunos);
      setIsLoading(false);
    } catch (error) {
      throw error;
    }
  }

  async function handleDeleteAluno(id: string) {
    if (!confirm("Você deseja realmente remover o aluno?")) {
      return;
    }

    try {
      setIsLoading(true);
      await api.delete(`/alunos/${id}`);
      await fetchAlunos();
    } catch (error) {
      alert(error);
    }
  }

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <main className="p-4 w-full max-w-screen-sm">
      <div className="flex justify-end gap-2 mb-4">
        <Link
          to="/alunos/novo"
          className="bg-sky-600 rounded-lg px-4 py-2 self-start text-white"
        >
          Novo Aluno
        </Link>
      </div>

      {alunos.length === 0 ? (
        <p>Nenhum aluno cadastrado</p>
      ) : (
        <div className="flex flex-col gap-4">
          {alunos.map((aluno) => (
            <div
              key={aluno._id}
              className="flex flex-col gap-4 p-4 border rounded-md"
            >
              <div>
                <p>
                  <strong>Nome:</strong> {aluno.nome}
                </p>
                <p>
                  <strong>Email:</strong> {aluno.email}
                </p>
                <p>
                  <strong>Status:</strong> {aluno.status}
                </p>
                <p>
                  <strong>Turma:</strong> {aluno.turma || "Não matriculado"}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link to={`/alunos/${aluno._id}/editar`}>
                  <FaRegEdit />
                </Link>
                <button
                  className="cursor-pointer"
                  onClick={() => handleDeleteAluno(aluno._id)}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
