import { BiPencil } from 'react-icons/bi';
import useToggleModal from 'Hooks/useToggleModal';
import ModalForm from 'components/ModalForm/ModalForm';
import ModalEdit from './ModalEdit';
import { EditBtn } from 'components/ModalAddTransaction/ModalAddTransactionButton/ModalAddTransactionButton.styled';

const EditTransactionModal = ({ item }) => {
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <EditBtn
        onClick={() => {
          openModal();
        }}
      >
        <BiPencil />
      </EditBtn>

      {isOpen && (
        <ModalForm
          closeModal={() => closeModal()}
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
        >
          <ModalEdit closeModal={closeModal} item={item} />
        </ModalForm>
      )}
    </div>
  );
};

export default EditTransactionModal;
