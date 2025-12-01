import styled from "styled-components";

const Input = styled.input`
  padding: 1rem;
  font-size: 1.2rem;
  border: 2px solid black;
  &:focus {
    outline: none;
    border: 2px solid orange;
  }
`;
export default Input;
