import styles from './Tasks.module.css';
import { PlusCircle, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Clipboard } from '../assets/Tasks';

interface ITasks {
    id: number;
    todo: string
    isCompleted: boolean
}

export function Tasks() {
    const [checked, setChecked] = useState(true)
    const [tasks, setTasks] = useState<ITasks[]>([
        {
            id: 1,
            todo: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            isCompleted: false
        },
        {
            id: 2,
            todo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.d sequi non voluptatum, omnis temporibus dolorum architecto ipsam dolore repudiandae.',
            isCompleted: true
        },
        {
            id: 3,
            todo: ' voluptatum, omnis.',
            isCompleted: false
        },
    ])

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