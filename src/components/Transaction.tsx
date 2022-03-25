import React from "react";
import { TransactionType } from "../context/GlobalState";

const Transaction = ({ transaction }: { transaction: TransactionType }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button className="delete-btn">x</button>
      </li>
    </div>
  );
};

export default Transaction;
