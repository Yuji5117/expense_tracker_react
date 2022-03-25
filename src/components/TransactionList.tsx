import React, { useContext } from "react";
import { GlobalContext, TransactionType } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions }: { transactions: TransactionType[] } =
    useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
