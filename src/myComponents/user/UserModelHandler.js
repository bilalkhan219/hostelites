import { Grid, MenuItem, Typography } from "@material-ui/core";
import { Formm } from "../Formm";
import { Signupform } from "../Signupform";
import {Complaints} from "./Complaints"
import {Invoice} from "./Invoice"
import React, { useState } from "react";

import useStyles from "./styles";
import { UserModel } from "./UserModel";

export const UserModelHandler = () => {
  const classes = useStyles();

  const [currentTab, setCurrentTab] = useState(0);

  const tab = {
    0: <Complaints />,
    1: <Invoice />,
  };

  const menuItems = () => {
    return (
      <Grid container>
        <Typography variant="h4" className={classes.workflowTitle}>
          User Home Page
        </Typography>
        <MenuItem
          className={
            currentTab === 0 ? classes.activeMenuItem : classes.menuItem
          }
          onClick={() => setCurrentTab(0)}
        >
          Complaint Form
        </MenuItem>
        <MenuItem
          className={
            currentTab === 1 ? classes.activeMenuItem : classes.menuItem
          }
          onClick={() => setCurrentTab(1)}
        >
          Invoice
        </MenuItem>
      </Grid>
    );
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <UserModel primaryCol={menuItems()} secondaryCol={tab[currentTab]} />
      </Grid>
    </Grid>
  );
};

export default UserModelHandler;
