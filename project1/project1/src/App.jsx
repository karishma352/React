import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/todo app/Header";
import TodoItem from "./components/todo app/TodoItem";
import Button from "./components/todo app/Button";
import "./components/todo app//style.css";
function App() {
  return (
    <div>
      <h1>TODO APP</h1>
      <div className="container">
        <Header title="Todo" />
        <TodoItem item="task1" />
        <TodoItem item="task2" />
        <TodoItem item="task3" />
        <TodoItem item="task4" />
        <TodoItem item="task5" />
        <Button />
      </div>
    </div>
  );
}

export default App;
