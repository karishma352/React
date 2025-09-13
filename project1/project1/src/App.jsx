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
        <Header />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <Button />
      </div>
    </div>
  );
}

export default App;
