import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }
  const [isEditing,setIsEditing] = useState(false);
  const startEditingHandler = () =>{
    setIsEditing(true);
  }
  const closeEditingHandler = () =>{
    setIsEditing(false);
  }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onCloseEditing={closeEditingHandler} onSaveExpenseData = {saveExpenseDataHandler} />}
    </div>
  )
}

export default NewExpense