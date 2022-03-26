import React, { useContext } from "react";
import { GlobalContext, TransactionType } from "../context/GlobalState";

const Balance = () => {
  const { transactions }: { transactions: TransactionType[] } =
    useContext(GlobalContext);

  const amounts: number[] = transactions.map(
    (transaction) => transaction.amount
  );
  // toFixed() = 固定小数点表記を用いて整形　2だと小数点第2位まで表示 0.00
  const total: string = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;
