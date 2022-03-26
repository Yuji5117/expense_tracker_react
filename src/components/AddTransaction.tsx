import React, { useContext, useState } from "react";
import { GlobalContext, TransactionType } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const { dispatch } = useContext(GlobalContext);

  const addTransaction = (transaction: TransactionType): void => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    const newTransaction: TransactionType = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form className="form-control">
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(parseInt(e.target.value))
            }
            placeholder="Enter amount..."
          />
        </div>
        <button
          className="btn"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => onSubmit(e)}
        >
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
