import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput/TextInput";
import TimeDateSection, {
  TimeFormState,
} from "../components/TimeDateSection/TimeDateSection";

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

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  text-align: center;
  font-family: Oswald;
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
      value: "WET_FOOD",
      label: "Wet Food",
    },
    {
      value: "DRY_FOOD",
      label: "Dry Food",
    },
  ];

  interface IFormState {
    name: string;
    email: string;
    foodType: string;
    foodQuantity: string;
    duckLocation: string;
    duckCount: string;
    foodName: string;
    time: string;
    date: string;
    recurringEvent: boolean;
  }

  const defaultFormState: IFormState = {
    name: "",
    email: "",
    foodType: "",
    foodQuantity: "",
    duckLocation: "",
    duckCount: "",
    foodName: "",
    time: "",
    date: "",
    recurringEvent: false,
  };

  const [formState, setFormState] = React.useState<IFormState>(
    defaultFormState
  );

  const [formError, setFormError] = React.useState<boolean>(false);
  const [submitted, setSubmitted] = React.useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = React.useState<boolean | undefined>(
    undefined
  );
  const [tryAgain, setTryAgain] = React.useState<boolean>(false);

  const handleChange = (key: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormState({
      ...formState,
      [key]: event.target.value,
    });
  };

  const onFoodTypeChange = (
    event: React.ChangeEvent<{
      name?: string;
      value: unknown;
    }>
  ) => {
    setFormState({
      ...formState,
      foodType: event.target.value as string,
    });
  };

  const onTimeChange = (timeState: TimeFormState) => {
    setFormState({
      ...formState,
      time: timeState.time,
      date: timeState.date,
      recurringEvent: timeState.recurringEvent,
    });
  };

  const onSubmit = async () => {
    const formInComplete = Object.values(formState).some(
      (input) => input === ""
    );

    if (formInComplete) {
      setFormError(true);
      return;
    }

    setFormError(false);
    setSubmitted(true);

    try {
      const resp = await fetch("http://localhost:7000/report", {
        method: "POST",
        body: JSON.stringify(formState),
      });

      if (!resp.ok) {
        throw Error("An err occured");
      }

      setSubmitSuccess(true);
      setSubmitted(false);
      setTryAgain(false);
    } catch (error) {
      setSubmitSuccess(false);
      setSubmitted(false);
      setTryAgain(true);
    }
  };

  return (
    <Form autoComplete="off" noValidate>
      {formError && (
        <ErrorMessage>Please fill all required fields</ErrorMessage>
      )}
      <TextInput
        id="name"
        label="Name"
        value={formState.name}
        size={"small"}
        variant={"standard"}
        onChangeCapture={handleChange("name")}
      />
      <TextInput
        id="email"
        label="Email"
        type={"email"}
        value={formState.email}
        size={"small"}
        variant="standard"
        onChangeCapture={handleChange("email")}
      />
      <TextInput
        id="duckCount"
        label="No. Of Ducks Fed"
        value={formState.duckCount}
        size={"small"}
        variant={"standard"}
        type={"number"}
        onChangeCapture={handleChange("duckCount")}
      />
      <TextInput
        id="duckLocation"
        label="Duck Location"
        value={formState.duckLocation}
        size={"small"}
        variant={"standard"}
        onChangeCapture={handleChange("duckLocation")}
      />
      <TextInput
        id="foodName"
        label="Food Name"
        value={formState.foodName}
        size={"small"}
        variant={"standard"}
        onChangeCapture={handleChange("foodName")}
      />

      <FormControl>
        <InputLabel id="foodTypeLabel">Food Type</InputLabel>
        <Select
          id="foodType"
          label="Food Type"
          value={formState.foodType}
          onChange={onFoodTypeChange}
          required
        >
          {foodTypes.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextInput
        id="foodQuantity"
        type="number"
        label="Food Quantity(kg)"
        value={formState.foodQuantity}
        size={"small"}
        variant={"standard"}
        onChangeCapture={handleChange("foodQuantity")}
      />
      <TimeDateSection onChange={onTimeChange} />
      {!submitSuccess && tryAgain ? (
        <ErrorMessage>
          An error occured submitting please try again
        </ErrorMessage>
      ) : null}
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        fullWidth
        onClick={onSubmit}
      >
        {submitted ? <CircularProgress /> : "Submit"}
      </Button>
    </Form>
  );
};

export default DuckForm;
