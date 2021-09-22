import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  ITransactionsContextData,
  IContextProps,
  ITransaction,
  ITransactionInput,
} from "./types";

const TransactionsContext = createContext<ITransactionsContextData>(
  {} as ITransactionsContextData
);

export function TransactionsProvider({ children }: IContextProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  async function createTransaction(transactionInput: ITransactionInput) {
    const res = await api.post("/transactions", transactionInput);
    const { transaction } = res.data;

    setTransactions([
      ...transactions,
      { ...transaction, createdAt: new Date() },
    ]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactionsContext() {
  const data = useContext(TransactionsContext);

  return data;
}
