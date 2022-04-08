import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  let properties = props.isClicked;
  console.log(properties)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm isClickedLower={properties} onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
