import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import WifiIcon from "@material-ui/icons/Wifi";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import HotelIcon from "@material-ui/icons/Hotel";
import { RoomTemplate } from "./RoomTemplate";

import useStyles from "./styles";

export const Rooms = () => {
  const classes = useStyles();
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
