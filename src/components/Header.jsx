import React from "react";
import { useState } from "react";

const Header = props => {
  let balance = 0;
  let income = 0;
  let expense = 0;

  const addSpace = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  props.transaction.forEach(transactions => {
    if (transactions.transactionType === false) {
      expense += parseInt(transactions.amount);
      balance -= parseInt(transactions.amount);
    } else {
      income += parseInt(transactions.amount);
      balance += parseInt(transactions.amount);
    }
  });

  return (
    <header className="head">
      <h1>Expense Tracker</h1>
      <h3>Balance</h3>
      <h2>{addSpace(balance)} €</h2>
      <div className="income-expense-window">
        <div className="income-window">
          <h3>INCOME</h3>
          <h3>{addSpace(income)} €</h3>
        </div>
        <div className="line-window"></div>
        <div className="expense-window">
          <h3>EXPENSE</h3>
          <h3>{addSpace(expense)} €</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
