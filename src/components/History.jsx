import React from "react";

const History = props => {
  const handleDelete = () => {
    props.setTransaction(prev => prev.filter(transaction => transaction.id != props.id));
  };

  const addSpace = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <li key={props.id}>
      <div className={`history-transaction-title-amount ${props.transactionType ? "income-green" : "expense-red"}`}>
        <div className="history-title">{props.title}</div>
        <div>{addSpace(props.amount)} €</div>
        <button onClick={handleDelete}>X</button>
      </div>
    </li>
  );
};

export default History;
