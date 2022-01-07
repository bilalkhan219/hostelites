import React from "react";
import {
  Grid,
  Button,
  Typography,
  Paper,
} from "@material-ui/core";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import WifiIcon from "@material-ui/icons/Wifi";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import HotelIcon from "@material-ui/icons/Hotel";
import "bootstrap/dist/css/bootstrap.min.css";
import useStyles from "./styles";

export const ComplaintTemplate = () => {
  const classes = useStyles();

  return (
    <Paper elevation={10} className={classes.paperstyle}>
      <Grid container xs={12} direction="column" >
          <Grid item container xs={12}>
          <Grid item container xs={1} justifyContent="center">
          <img alt="" src={require("./room.jpeg")} className={classes.imageForComplaint} />
        </Grid>
          <Grid item container xs={11} direction="column">
            <Typography variant="body1" className={classes.nameStyle}> MaheenMobeen </Typography>
            <Typography variant="caption"> maheenmobeen@gmail.com </Typography> 
          </Grid>
        </Grid>
          <Grid item
            container
            xs={12}
            justifyContent="space-between"
            className={classes.titleGrid}>
          <Typography variant="h5" className={classes.nameStyle} > Complaint Title</Typography>
          </Grid>
          <Grid item
            container
            xs={12}
            justifyContent="space-between">
          <Grid item container justifyContent="center" xs={12}>
            <Grid xs={8}> <Typography variant="body2" className={classes.titleGrid}>  Complaint Text Complaint Text Complaint Text Complaint Text Complaint Text Complaint Text Complaint Text Complaint Text Complaint Text Complaint Text Complaint Text Complaint Text Complaint Text </Typography>
           </Grid>
            <Grid item container justifyContent="flex-end" alignItems="flex-end" xs={4}>
            <Button
              id="Resolved"
              type="submit"
              variant="contained"
              className={classes.btnStyle}
            >
              Resolved
            </Button>
            {/* <Button
              id="Resolved"
              type="submit"
              variant="contained"
              className={classes.btnStyle}
            >
              Resolved
            </Button> */}
            </Grid>
          </Grid>
          </Grid>
         </Grid>
    </Paper>
  );
};
export default ComplaintTemplate;
