import styled from "styled-components";

const StyledHeader = styled.header`
  background: var(--color-grey-50);
  border-bottom: var(--color-grey-100);
  /* padding: 4.8rem; */
  height: 9rem;
`;

function Header() {
  return <StyledHeader>header</StyledHeader>;
}

export default Header;
