import styled from "styled-components";
import { HiOutlineDuplicate } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

import { formatCurrency } from "../../utils/helper";

import CreateCabinsForm from "./CreateCabinsForm";
import Row from "../../ui/Row";
import Modal from "../../ui/Modal";

import { useDeleteCabin } from "./useDeleteCabin";
import { useState } from "react";
import { useCreateCabin } from "./useCreateCabin";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

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
  const [showForm, setShowForm] = useState(false);
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
      <TableRow>
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
          <button onClick={() => setShowForm((prev) => !prev)}>
            <MdEdit />
          </button>
          <button
            onClick={() => deleteCabinMutate(cabinId)}
            disabled={isDeleting}
          >
            <RiDeleteBin6Line />
          </button>
        </Row>
      </TableRow>
      {/* {showForm && (
        <Modal onCloseModal={() => setShowForm(false)}>
          <CreateCabinsForm
            onClose={() => setShowForm(false)}
            cabinToEdit={cabin}
          />
        </Modal>
      )} */}
    </>
  );
}

export default CabinRow;
