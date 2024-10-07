import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import './App.css';

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4-10-2023",
    },
    {
      name: "Like now",
      dueDate: "10-07-2024",
    },
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
  ];

  return (
    <center className='todo-container'>
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  )
}
export default App
