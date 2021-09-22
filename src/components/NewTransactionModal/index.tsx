import ReactModal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import incomeIMG from "../../assets/income.svg";
import outcomeIMG from "../../assets/outcome.svg";
import closeIMG from "../../assets/close.svg";
import { FormEvent, useState } from "react";
import { useTransactionsContext } from "../../hooks/useTransactionsContex/useTransactionsContext";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModalProps) {
  const { createTransaction } = useTransactionsContext();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"deposit" | "withdraw">("deposit");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");

    onRequestClose();
  }

  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      onRequestClose={onRequestClose}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeIMG} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleSubmit}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            isActive={type === "deposit"}
            activeColor={"green"}
            type="button"
            className="deposit"
            onClick={() => {
              setType("deposit");
            }}
          >
            <img src={incomeIMG} alt="Entradas" />
            Entradas
          </RadioBox>
          <RadioBox
            isActive={type === "withdraw"}
            activeColor={"red"}
            type="button"
            className="withdraw"
            onClick={() => {
              setType("withdraw");
            }}
          >
            <img src={outcomeIMG} alt="Saídas" />
            Saídas
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
}
