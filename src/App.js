import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransation } from './components/AddTransation';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransation />

        </div>
      </GlobalProvider>

    </div>
  );
}

export default App;
