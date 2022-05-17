import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

    const filteredExpenses = props.items;

    let expensesContent = <h2 className="expenses-list__fallback">No expenses found!</h2>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(item => {
            return <ul className='expenses-list' key={item.id}><ExpenseItem date={item.date} title={item.title} amount={item.amount}></ExpenseItem></ul>
        })
    }

    return expensesContent;
};

export default ExpensesList;