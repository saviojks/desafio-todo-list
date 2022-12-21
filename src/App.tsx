import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { TodoForm } from './components/TodoForm';
import './global.css';
export function App() {

  return (
    <div className="App">
      <Header />
      <TodoForm />
      <Tasks />
    </div>
  )
}

export default App
