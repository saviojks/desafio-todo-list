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

  function removeTask(taskToDelete: number) {
    const tasksWithoutDeleteOne = tasks.filter(
      (task) => task.id !== taskToDelete
    );
    setTasks(tasksWithoutDeleteOne)
  }

  function updateIsCompleted(taskChangedIsCompleted: ITasks) {
    const taskIndex = tasks.findIndex(
      (task) => task.id === taskChangedIsCompleted.id
    );

    const taskUpdated = [...tasks]
    taskUpdated[taskIndex] = taskChangedIsCompleted;

    setTasks(taskUpdated)
  }

  return (
    <div className="App">
      <Header />
      <TodoForm onHandleAddTask={handleAddTask} />
      <TasksContainer tasks={tasks} onRemoveTask={removeTask} onUpdateIsCompleted={updateIsCompleted} />
    </div>
  )
}

export default App
