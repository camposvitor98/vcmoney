import styled from "styled-components";

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

  section {
    display: flex;
    gap: 1rem;
    label {
      flex: 1;
      border: 1.5px solid #969cb2;

      height: 4rem;
      border-radius: 0.25rem;
      background-color: #f0f2f5;

      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      input {
        display: none;
      }
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
