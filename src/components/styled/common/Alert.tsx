import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  if (!props.isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent style={{ margin: "0" }}>
        <CloseButton onClick={props.onClose}>&times;</CloseButton>
        {props.children}
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 102;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: ${props => props.theme.palette.primary.backgroundPrimary};
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${props => props.theme.main};
  font-size: 30px;
`;

export default Modal;
