import { useState } from 'react'; // Importa o hook useState do React
// Define o componente funcional TodoForm, que recebe a prop addTodo
const TodoForm = ({ addTodo }) => {
    // Define o estado inicial do valor e da categoria utilizando o useState hook
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão de envio do formulário
        if (!value || !category) return; // Verifica se o valor e a categoria não estão vazios
        addTodo(value, category); // Chama a função addTodo passando o valor e a categoria
        setValue(''); // Reseta o valor do input
        setCategory(''); // Reseta o valor do select
    };

    // Retorna a estrutura JSX do formulário para criar uma nova tarefa
    return (
        <div className='todo-form'>
            <h2>Criar tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Digite o título' 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} // Atualiza o estado do valor ao digitar no input
                />
                <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} // Atualiza o estado da categoria ao selecionar no dropdown
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Pessoal">Pessoal</option>
                </select>
                <button type='submit'>Criar tarefa</button>
            </form>
        </div>
    );
}

export default TodoForm; // Exporta o componente TodoForm
