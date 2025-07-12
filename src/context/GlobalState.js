import React, { createContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

const initialSate = {
    transactions: [
        { id: 1, description: 'Income 1', transactionAmount: 10000 },
        { id: 2, description: 'Income 2', transactionAmount: 20000 },
        { id: 3, description: 'Salery 1', transactionAmount: -5000 },
        { id: 4, description: 'Salery 2', transactionAmount: -10000 }
    ]
}

//create the global context
export const GlobalContext = createContext(initialSate);

//create the provider for the global context
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialSate);

    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}