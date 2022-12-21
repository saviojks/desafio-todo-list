import styles from './Tasks.module.css';
import { PlusCircle, Trash } from 'phosphor-react';
import { useState } from 'react';

export function Tasks() {
    const [checked, setChecked] = useState(true)
    const [tasks, setTasks] = useState([
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
            todo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.d sequi non voluptatum, omnis temporibus dolorum architecto ipsam dolore repudiandae.',
            isCompleted: false
        },
    ])


    return (
        <div className={styles.tasksContainer}>
            <header className={styles.tasksHeader} >
                <p>Tarefas criadas <span className="">1</span></p>
                <p>Concluídas <span className="">1</span></p>
            </header>
            <div className={styles.tasksList}>
                {tasks.map((task) => {
                    return (

                        <div key={task.id} className={styles.task}>
                            <input className={styles.taskInput} onChange={() => setChecked(!checked)} checked={task.isCompleted} type="checkbox" />
                            <label onClick={() => setChecked(!checked)} htmlFor="checkbox"></label>
                            <p> {task.todo}</p>
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