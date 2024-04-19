import { useState } from 'react'; // Importa o hook useState do React
import Todo from './components/Todo'; // Importa o componente Todo
import "./App.css"; // Importa o arquivo CSS do componente App
import TodoForm from './components/TodoForm'; // Importa o componente TodoForm
import Search from './components/Search'; // Importa o componente Search
import Filter from './components/Filter'; // Importa o componente Filter

function App() {
  // Define o estado inicial dos todos utilizando o useState hook
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    { id: 2,text: "Ir para a academia", category: "Pessoal", isCompleted: false },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  // Define o estado inicial da busca utilizando o useState hook
  const [search, setSearch] = useState("");

  // Define o estado inicial do filtro utilizando o useState hook
  const [filter, setFilter] = useState("All");

  // Define o estado inicial da ordenação utilizando o useState hook
  const [sort, setSort] = useState("Asc");

  // Função para adicionar um novo todo à lista
  const addTodo = (text, category) => {
    const newTodos = [...todos, 
      { id: Math.floor(Math.random() * 1000), text, category, isCompleted: false }
    ];
    setTodos(newTodos);
  };

  // Função para remover um todo da lista
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ?  todo : null)
    setTodos(filteredTodos);
  };

  // Função para marcar um todo como completo ou incompleto
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ?  todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  };

  // Renderiza o componente App
  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} /> {/* Renderiza o componente Search e passa as props search e setSearch */}
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} /> {/* Renderiza o componente Filter e passa as props filter, setFilter e setSort */}
      <div className='todo-list'>
        {todos
          .filter((todo) =>
          filter === "All"
            ? true
            : filter === "Completed"
            ? todo.isCompleted
            : !todo.isCompleted
        )
        .filter((todo) =>
          todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) =>
          sort === "Asc"
            ? a.text.localeCompare(b.text)
            : b.text.localeCompare(a.text)
        )
        .map((todo)=>(
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} /> // Renderiza o componente Todo passando as props key, todo, removeTodo e completeTodo
        ))}
      </div>
      <TodoForm addTodo={addTodo} /> {/* Renderiza o componente TodoForm passando a prop addTodo */}
    </div>
  );
}

export default App; // Exporta o componente App
