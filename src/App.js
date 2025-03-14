import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FriendList from "./components/FriendList";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import Dashboard from "./components/Dashboard";
import "./App.css";

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <nav>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/friends">Friends</Link></li>
                        <li><Link to="/expenses">Expenses</Link></li>
                        <li><Link to="/summary">Summary</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/friends" element={<FriendList />} />
                    <Route path="/expenses" element={<ExpenseList />} />
                    <Route path="/summary" element={<ExpenseSummary />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;