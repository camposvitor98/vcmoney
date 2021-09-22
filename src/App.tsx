import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/globalStyle";
import { useState } from "react";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactionsContex/useTransactionsContext";

Modal.setAppElement("#root");

export function App() {
  const [toggleNewTransaction, setToggleNewTransaction] = useState(false);

  function handleOpenNewTransaction() {
    setToggleNewTransaction(true);
  }

  function handleCloseNewTransaction() {
    setToggleNewTransaction(false);
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransaction={handleOpenNewTransaction} />

      <Dashboard />

      <NewTransactionModal
        isOpen={toggleNewTransaction}
        onRequestClose={handleCloseNewTransaction}
      />
    </TransactionsProvider>
  );
}
