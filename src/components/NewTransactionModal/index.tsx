import ReactModal from "react-modal";
import { Container } from "./styles";
import incomeIMG from "../../assets/income.svg";
import outcomeIMG from "../../assets/outcome.svg";
import closeIMG from "../../assets/close.svg";

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      onRequestClose={onRequestClose}
    >
      <button type="button" onClick={onRequestClose}>
        <img src={closeIMG} alt="Fechar Modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <section>
          <label>
            <img src={incomeIMG} alt="Entradas" />
            Entradas
            <input type="radio" name="transactionType" value="deposit" />
          </label>
          <label>
            <img src={outcomeIMG} alt="Saídas" />
            Saídas
            <input type="radio" name="transactionType" value="withdraw" />
          </label>
        </section>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
}
