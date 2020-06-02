import {
  createStyles,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";
import AddBox from "@material-ui/icons/AddBox";
import Delete from "@material-ui/icons/Delete";
import React from "react";
import styled from "styled-components";
import TextInput from "../TextInput/TextInput";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TimeSection = styled.div`
  display: flex;
  margin-top: 30px;
  /* flex-direction: column; */
  /* justify-content: center; */
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      padding: 0,
      alignSelf: "flex-end",
      marginLeft: "15px",
    },
  })
);

const TimeForm = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <TextInput
        id={"date"}
        label="Date"
        type="date"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TimeSection>
        <TextInput
          id="time"
          label="Time"
          type="time"
          defaultValue="00:00"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <IconButton color={"inherit"} className={classes.iconButton}>
          <AddBox />
        </IconButton>
      </TimeSection>
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItem button>
          <ListItemText primary="Hello" />
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default TimeForm;
