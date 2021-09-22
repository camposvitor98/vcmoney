import { ReactNode } from "react";

export interface ITransaction {
  id: number;
  title: string;
  type: "deposit" | "withdraw";
  category: string;
  amount: number;
  createdAt: string;
}

export interface IContextProps {
  children: ReactNode;
}

export type ITransactionInput = Omit<ITransaction, "id" | "createdAt">;

export interface ITransactionsContextData {
  transactions: ITransaction[];
  createTransaction: (transaction: ITransactionInput) => Promise<void>;
}
