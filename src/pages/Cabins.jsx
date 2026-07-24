import AddCabins from "../features/cabins/AddCabins";
import CabinsTable from "../features/cabins/CabinsTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <>
      <Row type={"horizontal"}>
        <Heading as={"h1"}>All Cabins</Heading>
        {/* <p>Filter / Sort </p> */}
      </Row>

      <Row type={"vertical"}>
        <CabinsTable />
        <AddCabins />
      </Row>
    </>
  );
}

export default Cabins;
