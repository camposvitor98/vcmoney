import styled from "styled-components";
import { darken, transparentize } from "polished";
export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem 0;
  h2 {
    margin-bottom: 1rem;

    color: var(--title);
    font-size: 1.5rem;
    font-weight: 600;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    background-color: #e7e9ee;
    color: var(--title);

    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text);
    }
  }

  button[type="submit"] {
    margin-top: 0.5rem;
    background-color: var(--green);
    color: #fff;
    width: 100%;
    height: 4rem;
    border-radius: 0.25rem;
    border: 0;

    font-size: 1rem;
    font-weight: 600;

    transition: filter 200ms;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
interface IRadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E62E4D",
};

export const RadioBox = styled.button<IRadioBoxProps>`
  flex: 1;
  border: 1.5px solid #d7d7d7;

  height: 4rem;
  border-radius: 0.25rem;
  background-color: ${({ isActive, activeColor }) =>
    isActive ? transparentize(0.9, colors[activeColor]) : "transparent"};

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  transition: border-color 200ms;

  img {
    height: 1.25rem;
    width: 1.25rem;
  }

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }
`;
