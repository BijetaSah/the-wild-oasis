import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 24rem 1fr;
  grid-template-rows: auto auto auto;
`;

function Applayout() {
  return (
    <StyledDiv>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </StyledDiv>
  );
}

export default Applayout;
