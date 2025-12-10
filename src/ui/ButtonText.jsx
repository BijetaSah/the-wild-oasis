import styled from "styled-components";

const ButtonText = styled.button`
  color: var(--color-brand-600);
  font-weight: 600;
  text-align: center;
  transition: all 0.2s;
  border: none;
  background: none;
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`;
export default ButtonText;
