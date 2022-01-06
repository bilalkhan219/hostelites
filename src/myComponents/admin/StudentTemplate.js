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

export const StudentTemplate = () => {
  const classes = useStyles();

  return (
    <Paper elevation={10} className={classes.paperstyle}>
      <Grid item container xs={12}>
        <Grid item xs={3}>
          <img alt="" src={require("./womanProfile1.jpg")} className={classes.image} />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item container xs={8}>
          <Grid
            item
            container
            xs={12}
            justifyContent="space-between"
            className={classes.titleGrid}
          >
            <Typography variant="h3"> Maheen Mobeen</Typography>
          </Grid>
          <Grid item container xs={12} justifyContent="space-between">
            <Grid item container xs={4}>
            <List className={classes.facilities}>
      <ListItem>
        <ListItemText primary="Room No. 1" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Bed No. 1" />
      </ListItem>
      <ListItem>
        <ListItemText primary="PUCIT" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Phn No. 0300-8080801" />
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
              
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
 
   
  );

};
export default StudentTemplate;
