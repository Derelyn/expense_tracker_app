import React from "react";
import { useState, useEffect } from "react";
import "../style.css";
import Header from "./components/Header";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";

function App() {
  const [transaction, setTransaction] = useState([]);

  return (
    <div className="app">
      <div className="app-main">
        <Header transaction={transaction} />

        <div className="history">
          <div className="header-sm">
            <h3>History</h3>
          </div>
        </div>
        {transaction.length === 0 && <div className="no-transaction">No transaction yet.</div>}
        <ul className={`history-transaction ${transaction.length > 3 && "history-scroll"}`}>
          {transaction.map(transactions => (
            <History setTransaction={setTransaction} transaction={transaction} transactionType={transactions.transactionType} id={transactions.id} amount={transactions.amount} title={transactions.title} key={transactions.id} />
          ))}
        </ul>
        <AddTransaction setTransaction={setTransaction} />
      </div>
    </div>
  );
}

export default App;
