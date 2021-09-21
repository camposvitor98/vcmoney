import { Container } from "./styles";
import incomeIMG from "../../assets/income.svg";
import outcomeIMG from "../../assets/outcome.svg";
import totalIMG from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIMG} alt="Entradas" />
        </header>
        <strong>R$12.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeIMG} alt="Saídas" />
        </header>
        <strong>- R$1.200,00</strong>
      </div>
      <div className={"highlight"}>
        <header>
          <p>Total</p>
          <img src={totalIMG} alt="Total" />
        </header>
        <strong>R$10.800,00</strong>
      </div>
    </Container>
  );
}
