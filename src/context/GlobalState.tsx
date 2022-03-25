import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export interface TransactionType {
  id: number;
  text: string;
  amount: number;
}

interface InitialState {
  transactions: TransactionType[];
}

const initialState: InitialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
