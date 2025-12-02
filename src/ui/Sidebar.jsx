import styled from "styled-components";
import Logo from "./Logo";
import MainNavbar from "./MainNavbar";

const StyledAside = styled.aside`
  background-color: var(--color-grey-50);
  grid-column: 1/2;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 1.2rem 0;
  border-right: 1px solid var(--color-grey-100);
`;
function Sidebar() {
  return (
    <StyledAside>
      <Logo />
      <MainNavbar />
    </StyledAside>
  );
}

export default Sidebar;
