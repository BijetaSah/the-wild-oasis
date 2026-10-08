import styled from "styled-components";
import { HiOutlineDuplicate } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

import { formatCurrency } from "../../utils/helper";

import CreateCabinsForm from "./CreateCabinsForm";
import Row from "../../ui/Row";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
import Table from "../../ui/Table";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  /* transform: scale(1.66666) translateX(-2px); */
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabinMutate } = useDeleteCabin();

  const { createNewCabin, isCreating } = useCreateCabin();
  const {
    id: cabinId,
    image,
    name,
    maxCapacity,
    regularPrice,
    discount,
  } = cabin;
  return (
    <>
      <Table.Row>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Can fit upto {maxCapacity} people</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <Row type="horizontal">
          <button
            onClick={() =>
              createNewCabin({
                image,
                name,
                maxCapacity,
                regularPrice,
                discount,
              })
            }
            disabled={isCreating}
          >
            <HiOutlineDuplicate />
          </button>

          <Modal>
            <Modal.Open opens={"edit"}>
              <button>
                <MdEdit />
              </button>
            </Modal.Open>
            <Modal.Window name={"edit"}>
              <CreateCabinsForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Open opens={"delete-popup"}>
              <button>
                <RiDeleteBin6Line />
              </button>
            </Modal.Open>
            <Modal.Window name={"delete-popup"} type="regular">
              <ConfirmDelete
                deleteResource={`cabin ${cabinId}`}
                disabled={isDeleting}
                onDelete={() => deleteCabinMutate(cabinId)}
              />
            </Modal.Window>
          </Modal>
        </Row>
      </Table.Row>
    </>
  );
}

export default CabinRow;
