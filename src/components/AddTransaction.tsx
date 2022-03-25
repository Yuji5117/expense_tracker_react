import React, { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  return (
    <>
      <h3>Add new transaction</h3>
      <form className="form-control">
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
