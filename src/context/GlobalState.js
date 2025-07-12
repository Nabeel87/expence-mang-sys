import React, { createContext, useReducer } from "react";

const initialSate = {
    transaction: [
        { id: 1, description: 'Income 1', transactionAmount: 10000 },
        { id: 2, description: 'Income 2', transactionAmount: 20000 },
        { id: 3, description: 'Salery 1', transactionAmount: -5000 },
        { id: 4, description: 'Salery 2', transactionAmount: -10000 }
    ]
}