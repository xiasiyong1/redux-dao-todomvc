import TodoApp from "./components/todo/todo-app";
import { testNormlize, testNormlize2, testNormlize3 } from "./normalize/test";
testNormlize();
testNormlize2();
testNormlize3();

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
