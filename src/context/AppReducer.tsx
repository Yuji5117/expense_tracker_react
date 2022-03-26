import { TransactionType } from "./GlobalState";

// type Action = "DELETE_TRANSACTION";

const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: TransactionType) => transaction.id !== action.payload
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
};

export default AppReducer;
