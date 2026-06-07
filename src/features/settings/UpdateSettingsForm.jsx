import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function UpdateSettingsForm() {
  return (
    <Form>
      <FormRow label={"Minimun nights/ bookings"}>
        <Input type="number" />
      </FormRow>{" "}
      <FormRow label={"Maximun nights/ bookings"}>
        <Input type="number" />
      </FormRow>{" "}
      <FormRow label={"Maximum guests/ bookings"}>
        <Input type="number" />
      </FormRow>{" "}
      <FormRow label={"Breakfast Price"}>
        <Input type="number" />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
