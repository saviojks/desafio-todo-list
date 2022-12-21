import styles from './Tasks.module.css';
import { PlusCircle, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Clipboard } from '../assets/Tasks';
import { ITasks } from '../App';


interface ITasksContainer {
    tasks: ITasks[]
}

export function TasksContainer({ tasks }: ITasksContainer) {
    const [checked, setChecked] = useState(true)


    // function handleAddTask(e:) {

    // }

    return (
        <div className={styles.tasksContainer}>
            <header className={styles.tasksHeader} >
                <p>Tarefas criadas <span className="">{tasks.length}</span></p>
                <p>Concluídas <span className="">{tasks.length} de {tasks.length} </span></p>
            </header>
            <div className={styles.tasksList}>
                {!tasks.length && (
                    <div className={styles.isEmpty} >
                        <Clipboard />
                        <strong>
                            Você ainda não tem tarefas cadastradas
                        </strong>
                        <p>
                            Crie tarefas e organize seus itens a fazer
                        </p>
                    </div>

                )}
                {tasks.map((task) => {
                    return (
                        <div key={task.id} className={styles.task}>
                            <div className={styles.inputAndText}>
                                <input className={styles.taskInput} onChange={() => setChecked(!checked)} checked={task.isCompleted} type="checkbox" />
                                <label onClick={() => setChecked(!checked)} htmlFor="checkbox"></label>
                                <p> {task.todo}</p>
                            </div>
                            <button className={styles.deleteButton} onClick={() => { }}>
                                <Trash size={24} />
                            </button>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}