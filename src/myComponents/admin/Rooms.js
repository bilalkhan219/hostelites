import React from "react";
import {
  Grid
} from "@material-ui/core";

import { RoomTemplate } from "./RoomTemplate";

//import useStyles from "./styles";

export const Rooms = () => {
  //const classes = useStyles();
  return (
    <Grid container item xs={12}>
      <RoomTemplate />
      <RoomTemplate />
      <RoomTemplate />
      <RoomTemplate />
      <RoomTemplate />
    </Grid>
  );
};
export default Rooms;
