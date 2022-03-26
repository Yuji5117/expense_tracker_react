import React, { useContext } from "react";
import { GlobalContext, TransactionType } from "../context/GlobalState";

const Transaction = ({ transaction }: { transaction: TransactionType }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  useContext(GlobalContext);

  const sign: string = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={(): void => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;
