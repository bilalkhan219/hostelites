import React from "react";
import {
  Grid
} from "@material-ui/core";

import { ComplaintTemplate } from "./ComplaintTemplate";

//import useStyles from "./styles";

export const Complaints = () => {
  //const classes = useStyles();
  return (
    <Grid container item xs={12}>
      <ComplaintTemplate />
      <ComplaintTemplate />
      <ComplaintTemplate />
      <ComplaintTemplate />
      <ComplaintTemplate />
    </Grid>
  );
};
export default Complaints;
