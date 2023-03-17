import React from "react";
import { useState } from "react";

const AddTransaction = props => {
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [transactionType, setTransactionType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() !== "" && amount.trim() !== "" && transactionType !== "") {
      props.setTransaction(prev => prev.concat({ title, amount, transactionType, id: Date.now() }));
      setAmount("");
      setTitle("");
      setTransactionType("");
    } else {
      alert("please enter all values");
    }
  }

  return (
    <div className="new-transaction">
      <div className="header-sm">
        <h3>Add new transaction</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="new-title">
          <label htmlFor="title">Title:&nbsp;</label>
          <br></br>
          <input value={title} onChange={e => setTitle(e.target.value)} id="title" name="title" type="text" placeholder="Groceries, mobile, internet etc." />
        </div>

        <div className="new-amount">
          <label htmlFor="amount">Amount:&nbsp;</label>
          <br></br>
          <input value={amount} onChange={e => setAmount(e.target.value)} id="amount" name="amount" type="number" placeholder="Enter number..." />
        </div>

        <div className="choice">
          <div className="choice">
            <input checked={transactionType === true} onChange={() => setTransactionType(true)} type="radio" name="type" id="income" />
            <label htmlFor="income">&nbsp;Income</label>
          </div>

          <div className="choice">
            <input checked={transactionType === false} onChange={() => setTransactionType(false)} type="radio" name="type" id="expense" />
            <label htmlFor="expense">&nbsp;Expense</label>
          </div>
        </div>

        <div className="add-button">
          <button type="submit">Add&nbsp;transaction</button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
