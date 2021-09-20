import { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface IHeaderProps {
  onOpenNewTransaction: () => void;
}

export function Header({ onOpenNewTransaction }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="vc money" />
        <button type="button" onClick={onOpenNewTransaction}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
