import { Button, MenuItem } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput/TextInput";
import TimeForm from "../components/TimeForm/TimeForm";

const Form = styled.form`
  margin: 1px;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  height: 70%;
  flex-direction: column;
  justify-content: space-between;
`;

const DuckForm = () => {
  const foodTypes: { value: string; label: string }[] = [
    {
      value: "Wet Food",
      label: "Wet Food",
    },
    {
      value: "Dry Food",
      label: "Dry Food",
    },
  ];

  const [foodType, setFoodType] = React.useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFoodType(event.target.value);
  };

  return (
    <Form noValidate autoComplete="off">
      <TextInput id="name" label="Name" size={"small"} variant={"standard"} />
      <TextInput id="email" label="Email" size={"small"} variant="standard" />

      <TextInput
        id="ducksCount"
        label="No. Of Ducks Fed"
        size={"small"}
        variant={"standard"}
      />
      <TextInput
        id="duckLocation"
        label="Duck Location"
        size={"small"}
        variant={"standard"}
      />

      <TextInput
        id="foodName"
        label="Food Name"
        size={"small"}
        variant={"standard"}
      />
      <TextInput
        id="foodType"
        label="Food Type"
        select
        value={foodType}
        onChangeCapture={handleChange}
      >
        {foodTypes.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </TextInput>
      <TextInput
        id="foodQuantity"
        label="Food Quantity"
        size={"small"}
        variant={"standard"}
      />
      <TimeForm />
      <Button variant="contained" color="secondary" disabled fullWidth>
        Submit
      </Button>
    </Form>
  );
};

export default DuckForm;
