import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Paper,
} from "@material-ui/core";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import WifiIcon from "@material-ui/icons/Wifi";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import HotelIcon from "@material-ui/icons/Hotel";

import useStyles from "./styles";

export const RoomTemplate = () => {
  const classes = useStyles();

  return (
    <Paper elevation={10} className={classes.paperstyle}>
      <Grid item container xs={12}>
        <Grid item xs={4}>
          <img alt="" src={require("./room1.jpg")} className={classes.image} />
        </Grid>
        <Grid item container xs={8}>
          <Grid
            item
            container
            xs={12}
            justifyContent="space-between"
            className={classes.titleGrid}
          >
            <Typography variant="h3"> Luxury Room</Typography>
            <Typography variant="h4"> 12,000 PKR </Typography>
          </Grid>
          <Grid item container xs={12} justifyContent="space-between">
            <Grid item container xs={4}>
              <List>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <HotelIcon className={classes.facilities} />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.facilities}
                    primary="2 Single Beds"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <WifiIcon className={classes.facilities} />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.facilities}
                    primary="Free Wifi"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item container xs={4}>
              <List>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <FastfoodIcon className={classes.facilities} />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.facilities}
                    primary="3 Meals a day"
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <DirectionsCarIcon className={classes.facilities} />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.facilities}
                    primary="Free Parking"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              container
              xs={4}
              justifyContent="flex-end"
              alignItems="flex-end"
              className={classes.avalabilityGrid}
            >
              <Typography variant="h6" className={classes.avalability}>
                Available
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default RoomTemplate;
