import { FormEvent, useState } from 'react';
import { Header } from './components/Header';
import { TasksContainer } from './components/Tasks';
import { TodoForm } from './components/TodoForm';
import './global.css';


export interface ITasks {
  id: number;
  todo: string
  isCompleted: boolean
}


export function App() {
  const [tasks, setTasks] = useState<ITasks[]>([])

  function handleAddTask(task: ITasks) {
    setTasks([...tasks, task])
  }

  return (
    <div className="App">
      <Header />
      <TodoForm onHandleAddTask={handleAddTask} />
      <TasksContainer tasks={tasks} />
    </div>
  )
}

export default App
