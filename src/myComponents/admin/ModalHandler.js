import { Grid, MenuItem, Typography } from "@material-ui/core";
import { Rooms } from "./Rooms";
import { Signupform } from "../Signupform";
import { Students } from "./Students";
import React, { useState } from "react";

import useStyles from "./styles";
import { Modal } from "./Modal";

export const ModalHandler = () => {
  const classes = useStyles();

  const [currentTab, setCurrentTab] = useState(0);

  const tab = {
    0: <Rooms />,
    1: <Signupform />,
    2: <Students />,
  };

  const menuItems = () => {
    return (
      <Grid container direction="column">
        <Typography variant="h4" className={classes.workflowTitle}>
          Admin Home Page
        </Typography>
        <MenuItem
          className={
            currentTab === 0 ? classes.activeMenuItem : classes.menuItem
          }
          onClick={() => setCurrentTab(0)}
        >
          View Rooms
        </MenuItem>
        <MenuItem
          className={
            currentTab === 1 ? classes.activeMenuItem : classes.menuItem
          }
          onClick={() => setCurrentTab(1)}
        >
          Requests
        </MenuItem>
        <MenuItem
          className={
            currentTab === 2 ? classes.activeMenuItem : classes.menuItem
          }
          onClick={() => setCurrentTab(2)}
        >
          Students
        </MenuItem>
      </Grid>
    );
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Modal primaryCol={menuItems()} secondaryCol={tab[currentTab]} />
      </Grid>
    </Grid>
  );
};

export default ModalHandler;
