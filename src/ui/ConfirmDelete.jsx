import { styled } from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmPopup = styled.div`
  /* width: 40%; */
  padding: 1.2rem 2.4rem;
  /* border-radius: var(--border-radius-sm); */
  /* background-color: var(--color-grey-50); */
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  & p {
    font-size: 1.6rem;
    color: var(--color-grey-600);
    margin-bottom: 1.4rem;
  }

  & div {
    display: flex;
    justify-content: end;
    gap: 1.2rem;
    align-items: center;
  }
`;

function ConfirmDelete({ deleteResource, onClose, onDelete, disabled }) {
  return (
    <StyledConfirmPopup>
      <Heading as={"h3"}>Delete {deleteResource}</Heading>
      <p>
        Are you sure you want to delete this {deleteResource}. This connpt be
        undone
      </p>
      <div>
        <Button variations={"primary"} sizes={"medium"} onClick={onClose}>
          Close
        </Button>

        <Button
          variations={"danger"}
          sizes={"medium"}
          onClick={onDelete}
          disabled={disabled}
        >
          Delete
        </Button>
      </div>
    </StyledConfirmPopup>
  );
}
export default ConfirmDelete;
