import styled from "styled-components";

const StyledP = styled.p`
  text-align: center;
  line-height: 1.6;
  font-size: 2.2rem;
  color: var(--color-brand-900);
`;
const StyledDiv = styled.div`
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Dashboard() {
  return (
    <StyledDiv>
      <StyledP>
        Manage your cabins effortlessly with Wild Oasis. Create, update, and
        organize cabin details, pricing, and availability—all in one place.
        Designed to simplify daily operations and give you full control over
        your property management. Start by adding a new cabin or editing
        existing ones to keep your listings up to date.
      </StyledP>
    </StyledDiv>
  );
}

export default Dashboard;
