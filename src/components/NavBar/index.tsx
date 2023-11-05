import { useState } from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
}

const NavContainer = styled.nav`
  background-color: #333;
  padding: 10px;
  display: flex;
`;

const NavItem = styled.div`
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
  cursor: pointer;
`;

const ContainerModal = styled.div`
  position: relative;
`

const Modal = styled.div<ModalProps>`
  position: absolute;
  top: 30px;
  left: 10px;
  width: 170px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  padding: 10px;
  background: gray;
  color: white;
`;

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <NavContainer data-testid="navbar">
      <NavItem>Home</NavItem>
      <ContainerModal>
        <NavItem onClick={handleModalToggle}>Contato</NavItem>
        <Modal data-testid="modal" isOpen={isModalOpen}>
          <p>Email: contato@example.com</p>
          <p>Telefone: (00) 123-4567</p>
        </Modal>
      </ContainerModal>
    </NavContainer>
  );
}