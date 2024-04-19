import React from 'react'; 

// Define o componente funcional Todo, que recebe as props todo, removeTodo e completeTodo
const Todo = ({ todo, removeTodo, completeTodo }) => {
  // Retorna a estrutura JSX que representa um todo na lista
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} // Adiciona estilo de risco no texto do todo se ele estiver completo
    >
      <div className='content'>
        <p>{todo.text}</p> {/* Exibe o texto do todo */}
        <p className='category'>({todo.category})</p> {/* Exibe a categoria do todo */}
      </div>
      <div>
        <button className='complete' onClick={() => completeTodo(todo.id)}>
          Completar {/* Botão para marcar o todo como completo ou incompleto */}
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          x {/* Botão para remover o todo da lista */}
        </button>
      </div>
    </div>  
  );
}

export default Todo; // Exporta o componente Todo
