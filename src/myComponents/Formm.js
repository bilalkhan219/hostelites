import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./styles.css";
import { Component } from "react";
import { Grid, Paper, Avatar , TextField, Button, InputLabel, Input, InputAdornment, } from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircle from '@mui/icons-material/AccountCircle';


export const Formm = () => {
  const paperstyle = {
    padding: 20,
    height: "70vh",
    width: 350,
    margin: "20px auto",
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperstyle}>
        <Grid align="center">
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <h4 className="my-2">SIGN IN</h4>
        </Grid>
        <TextField id="namefield" label="Username" fullWidth required/>
        <TextField id="passwordfield" label="Password" type="password" fullWidth required/>
         <Button type="submit" color="primary" fullWidth variant="contained" className="my-2">Sign in</Button>
      </Paper>
    </Grid>
  );
};
