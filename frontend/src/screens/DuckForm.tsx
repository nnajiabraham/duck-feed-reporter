import { Button, makeStyles, MenuItem } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput/TextInput";
import TimeDateSection from "../components/TimeDateSection/TimeDateSection";

const Form = styled.form`
  margin: 1px;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  min-height: 70%;
  flex-direction: column;
  justify-content: space-between;
`;

const useStyles = makeStyles({
  button: {
    marginTop: 20,
  },
});

const DuckForm = () => {
  const classes = useStyles();
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
    <Form autoComplete="off">
      <TextInput id="name" label="Name" size={"small"} variant={"standard"} />
      <TextInput
        id="email"
        label="Email"
        type={"email"}
        size={"small"}
        variant="standard"
      />

      <TextInput
        id="ducksCount"
        label="No. Of Ducks Fed"
        size={"small"}
        variant={"standard"}
        type={"number"}
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
        type="number"
        label="Food Quantity(kg)"
        size={"small"}
        variant={"standard"}
      />
      <TimeDateSection />
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        fullWidth
      >
        Submit
      </Button>
    </Form>
  );
};

export default DuckForm;
