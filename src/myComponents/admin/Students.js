import React from "react";
import {
  Grid
} from "@material-ui/core";

import { StudentTemplate } from "./StudentTemplate";

//import useStyles from "./styles";

export const Students = () => {
  //const classes = useStyles();
  return (
    <Grid container item xs={12}>
      <StudentTemplate />
      <StudentTemplate />
      <StudentTemplate />
      <StudentTemplate />
      <StudentTemplate />
    </Grid>
  );
};
export default Students;
