import styles from './TodoForm.module.css';
import { PlusCircle } from 'phosphor-react';

export function TodoForm() {
    return (
        <form className={styles.todoForm}>
            <input placeholder="Adicione uma nova tarefa" />
            <button className={styles.submitBtn} type="submit" >
                Criar
                <PlusCircle size={20} weight='bold' />
            </button>
        </form>
    )
}