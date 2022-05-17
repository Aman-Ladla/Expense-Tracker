import { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';


function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false);

    const newExpenseAdd = (expense) => {
        expense = {
            ...expense,
            id: Math.random().toString(),
        }
        props.onExpenseAdd(expense);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">

            {!isEditing &&
                (<button onClick={startEditingHandler}>Add New Expense</button>)
            }

            {isEditing &&
                (<NewExpenseForm onExpenseAdd={newExpenseAdd} onCancel={stopEditingHandler} />)
            }
        </div>
    );
}

export default NewExpense;