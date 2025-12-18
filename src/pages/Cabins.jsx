import { useState } from "react";

import CabinsTable from "../features/cabins/CabinsTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import Form from "../ui/Form";
import CreateCabinsForm from "../features/cabins/CreateCabinsForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type={"horizontal"}>
        <Heading as={"h1"}>All Cabins</Heading>
        <p>Filter / Sort </p>
      </Row>

      <Row type={"vertical"}>
        <CabinsTable />
        <Button
          variations={"primary"}
          sizes={"medium"}
          onClick={() => setShowForm((show) => !show)}
        >
          Add Cabin
        </Button>
        {showForm && <CreateCabinsForm />}
      </Row>
    </>
  );
}

export default Cabins;
