import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

import { useSetting } from "./useSetting";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    setting: {
      maxBookingLength,
      minBookingLength,
      breakfastPrice,
      maxGuestsPerBooking,
    } = {},
    isLoading,
  } = useSetting();

  const { updateSettingMutate, isUpdating } = useUpdateSetting();

  function handleUpate(e, field) {
    const value = e.target.value;
    updateSettingMutate({
      [field]: value,
    });
  }

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label={"Minimun nights/ bookings"}>
        <Input
          type="number"
          id="minBookingLength"
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpate(e, "minBookingLength")}
          disabled={isUpdating}
        />
      </FormRow>{" "}
      <FormRow label={"Maximun nights/ bookings"}>
        <Input
          type="number"
          id="maxBookingLength"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpate(e, "maxBookingLength")}
          disabled={isUpdating}
        />
      </FormRow>{" "}
      <FormRow label={"Maximum guests/ bookings"}>
        <Input
          type="number"
          id="maxGuestsPerBooking"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpate(e, "maxGuestsPerBooking")}
          disabled={isUpdating}
        />
      </FormRow>{" "}
      <FormRow label={"Breakfast Price"}>
        <Input
          type="number"
          id="breakfastPrice"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpate(e, "breakfastPrice")}
          disabled={isUpdating}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
