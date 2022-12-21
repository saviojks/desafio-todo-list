import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import './global.css';
export function App() {

  return (
    <div className="App">
      <Header />
      <TodoForm />
    </div>
  )
}

export default App
