import styles from './TodoForm.module.css';
import { PlusCircle } from 'phosphor-react';
import { ITasks } from '../App';
import { ChangeEvent, useState } from 'react';

interface ITodoForm {
    onHandleAddTask: (task: ITasks) => void;
}

export function TodoForm({ onHandleAddTask }: ITodoForm) {
    const [todo, setTodo] = useState('')

    function handleTodoChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setTodo(e.target.value);
    }

    function handleMountedToTask() {
        if (!todo) return;
        const newTask = {
            id: new Date().getTime(),
            todo,
            isCompleted: false
        }
        onHandleAddTask(newTask)
        setTodo('')
    }

    return (
        <div className={styles.todoForm}>
            <input value={todo} onChange={handleTodoChange} placeholder="Adicione uma nova tarefa" />
            <button className={styles.submitBtn} disabled={!todo} onClick={handleMountedToTask} type="submit" >
                Criar
                <PlusCircle size={20} weight='bold' />
            </button>
        </div>
    )
}