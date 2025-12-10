import styled from "styled-components";

const StyledHeader = styled.header`
  background: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  padding: 1.2rem 4.8rem;
  /* height: 9rem; */
`;

function Header() {
  return <StyledHeader>header</StyledHeader>;
}

export default Header;
