import { Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import TextInput from "../TextInput/TextInput";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Section = styled.div`
  display: flex;
  margin-top: 30px;
`;

const TimeForm = () => {
  const [inputTime, setInputTime] = React.useState<string>("12:00");
  const [date, setDate] = React.useState<string>("2020-12-25");

  const [recurringState, setRecurringState] = React.useState(false);

  const handleRecurringChange = (_: React.ChangeEvent<HTMLInputElement>) => {
    setRecurringState(!recurringState);
  };

  const onTimeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputTime(event.target.value);

  const onDateChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDate(event.target.value);

  return (
    <Wrapper>
      <Section>
        <FormControlLabel
          control={
            <Checkbox
              checked={recurringState}
              onChange={handleRecurringChange}
              name="Recurring"
            />
          }
          label="Recurring"
        />
        <TextInput
          id={"date"}
          label="Date"
          type="date"
          size="small"
          defaultValue={date}
          onChangeCapture={onDateChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Section>

      <TextInput
        id="time"
        label="Time"
        type="time"
        defaultValue={inputTime}
        InputLabelProps={{
          shrink: true,
        }}
        onChangeCapture={onTimeChange}
      />
    </Wrapper>
  );
};

export default TimeForm;
