import { MdOutlineClose } from "react-icons/md";
import styled, { css } from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  transition: 0.3s all;
  box-shadow: var(--shadow-md);

  ${(props) =>
    props.type === "modal" &&
    css`
      padding: 4.2rem 3.6rem 2.4rem;
      width: 70%;
    `}

  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 3.6rem;
    `}
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(16px);
  transition: 0.3s all;
  z-index: 1000;
`;

const Button = styled.button`
  /* color: black; */
  border: none;
  background-color: inherit;
  font-size: 2.4rem;
  position: absolute;
  right: 8px;
  top: 8px;
`;

function Modal({ children, onCloseModal }) {
  return (
    <Overlay>
      <StyledModal type={"modal"}>
        <Button onClick={onCloseModal}>
          <MdOutlineClose />
        </Button>
        {children}
      </StyledModal>
      ;
    </Overlay>
  );
}
export default Modal;
