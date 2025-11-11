# Portal do Professor - Frontend

Frontend do projeto **Portal do Professor**, desenvolvido com **Vite + React + TypeScript**, seguindo o padrão **mobile first**.

---

## 🚀 Tecnologias e Ferramentas

- **Vite + React + TypeScript** — estrutura leve e moderna para desenvolvimento rápido.
- **Axios** com *interceptors* — responsável por gerenciar tokens de autenticação vindos da API.
- **Tailwind CSS** — estilização responsiva e eficiente.
- **React Router DOM** — gerenciamento de rotas públicas e protegidas.
- **Context API** — controle de sessão do usuário e dados compartilhados entre componentes.

---

## 📱 Estrutura e Funcionalidades

O frontend foi projetado de forma **escalável**, com **componentização clara** e **separação de responsabilidades**.

### Funcionalidades implementadas:
- Login funcional com integração à API.
- Gerenciamento completo de tokens (armazenamento, atualização e logout automático em caso de erro de autenticação).
- CRUD completo de **alunos** — adicionar, visualizar, editar e deletar.
- Controle de sessão via **Context API**.
- Rotas públicas e protegidas.
- Layouts distintos para usuários autenticados e visitantes (`AuthLayout` e `GuestLayout`).

### Estrutura de Rotas

```tsx
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
```

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione:

```
VITE_API_URL=
```

Exemplo:
```
VITE_API_URL=http://localhost:3000
```

---

## 🧩 Instalação e Execução

```bash
npm install
npm run dev
```

---

## 💡 Observação

O foco deste desenvolvimento foi entregar as **funcionalidades principais** dentro do tempo disponível.  
Funcionalidades implementadas e testadas:

✅ Login e autenticação  
✅ Gerenciamento de token via interceptors  
✅ CRUD de alunos (criar, listar, editar, deletar)  
✅ Estrutura escalável e mobile first

---

## 🧑‍💻 Autor

Desenvolvido por **Hélio** — Full Stack Developer (Node, React, React Native, Mongo, Postgres)
