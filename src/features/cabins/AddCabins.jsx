import Button from "../../ui/Button";
import CreateCabinsForm from "./CreateCabinsForm";
import Modal from "../../ui/Modal";
import CabinsTable from "./CabinsTable";

function AddCabins() {
  return (
    <>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button variations={"primary"} sizes={"medium"}>
            Add cabin
          </Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinsForm />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default AddCabins;
