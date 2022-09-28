import {useState} from "react"
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  return (
    <div>
      <h1>ToDo list</h1>
      <TodoForm />
    </div>
  );
}

export default App;
