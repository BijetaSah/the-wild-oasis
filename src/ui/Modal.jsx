import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import styled, { css } from "styled-components";

import { useClickOutside } from "../hooks/useClickOutside";

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
const ModalContext = createContext();

function Modal({ children }) {
  const [open, setOpen] = useState("");

  const openModal = setOpen;
  const closeModal = () => setOpen("");

  return (
    <ModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensModalName }) {
  const { openModal } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => openModal(opensModalName) });
}

function Window({ children, name, type = "modal" }) {
  const { closeModal, open } = useContext(ModalContext);
  const modalRef = useClickOutside(closeModal, true);

  if (open !== name) return null;

  return createPortal(
    <Overlay>
      <StyledModal type={type} ref={modalRef}>
        <Button onClick={closeModal}>
          <MdOutlineClose />
        </Button>
        <div>{cloneElement(children, { onClose: closeModal })}</div>
      </StyledModal>
    </Overlay>,
    document.body,
  );
}
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
