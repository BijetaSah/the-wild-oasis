import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinsForm from "./CreateCabinsForm";
import Modal from "../../ui/Modal";

function AddCabinsV1() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Button
        variations={"primary"}
        sizes={"medium"}
        onClick={() => setShowForm((show) => !show)}
      >
        Add Cabin
      </Button>
      {showForm && (
        <Modal onCloseModal={() => setShowForm(false)}>
          <CreateCabinsForm onClose={() => setShowForm(false)} />
        </Modal>
      )}
      {/* {showForm && <CreateCabinsForm />} */}
    </>
  );
}

export default AddCabinsV1;
