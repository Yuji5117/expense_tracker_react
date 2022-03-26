import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export interface TransactionType {
  id: number;
  text: string;
  amount: number;
}

export interface InitialState {
  transactions: TransactionType[];
  dispatch?: any;
}

const initialState: InitialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
