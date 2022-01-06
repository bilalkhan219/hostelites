import React from "react";
import { Grid } from "@material-ui/core";
import { RoomTemplate } from "./RoomTemplate";

export const Rooms = () => {
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
