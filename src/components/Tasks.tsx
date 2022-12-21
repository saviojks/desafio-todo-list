import styles from './Tasks.module.css';
import { Trash } from 'phosphor-react';
import { useState } from 'react';
import { Clipboard } from '../assets/Tasks';
import { ITasks } from '../App';

interface ITasksContainer {
    tasks: ITasks[],
    onRemoveTask: (taskID: number) => void;
    onUpdateIsCompleted: (task: ITasks) => void;
}

export function TasksContainer({ tasks, onRemoveTask, onUpdateIsCompleted }: ITasksContainer) {
    function handleToCompletedChange(task: ITasks) {
        onUpdateIsCompleted(
            { ...task, isCompleted: !task.isCompleted }
        )
    }

    const tasksCompleted = tasks.filter(task => task.isCompleted).length

    return (
        <div className={styles.tasksContainer}>
            <header className={styles.tasksHeader} >
                <p className={styles.createdTasks} >Tarefas criadas <span>{tasks.length}</span></p>
                <p className={styles.completed} >Concluídas <span>{`${tasksCompleted} ${tasks.length ? ` de ${tasks.length}` : ''}`}</span></p>
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
                                <input className={styles.taskInput} onChange={() => handleToCompletedChange(task)} checked={task.isCompleted} type="checkbox" />
                                <label onClick={() => handleToCompletedChange(task)} htmlFor="checkbox"></label>
                                <p className={task.isCompleted ? styles.isChecked : styles.notIsChecked}> {task.todo}</p>
                            </div>
                            <button className={styles.deleteButton} onClick={() => onRemoveTask(task.id)}>
                                <Trash size={24} />
                            </button>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}