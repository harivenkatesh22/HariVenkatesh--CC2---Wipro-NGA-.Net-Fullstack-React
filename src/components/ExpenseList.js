import React, { useState } from "react";
import "./ExpenseList.css";

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const addExpense = () => {
        if (!description || !amount) return;
        setExpenses([...expenses, { id: Date.now(), description, amount: parseFloat(amount) }]);
        setDescription("");
        setAmount("");
    };

    return (
        <div className="expense-list">
            <h2>Expenses</h2>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Expense description"
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
            />
            <button onClick={addExpense}>Add Expense</button>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>{expense.description}: ${expense.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;