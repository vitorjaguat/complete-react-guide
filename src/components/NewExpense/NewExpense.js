import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const cancelHandler = () => setShowForm(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 10000).toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelHandler={cancelHandler}
        />
      )}

      {!showForm && (
        <button onClick={() => setShowForm(true)}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
