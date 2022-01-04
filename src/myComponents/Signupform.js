import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export const Signupform = () => {
  const signupBtnStyle = {
    backgroundColor: "black",
    color: "white",
  };
  const paperstyle = {
    padding: 20,
    height: "70vh",
    width: 350,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "black",
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperstyle} className="my-5">
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h4 className="my-2">SIGN UP</h4>
        </Grid>
        <TextField
          id="namefield"
          label="Username"
          className="my-2"
          fullWidth
          required
        />
        <TextField
          id="emailfield"
          label="Email"
          className="my-2"
          fullWidth
          required
        />
        <TextField
          id="passwordfield"
          label="Password"
          type="password"
          className="my-2"
          fullWidth
          required
        />
        <TextField
          id="conpasswordfield"
          label="Confirm Password"
          type="password"
          className="my-2"
          fullWidth
          required
        />
        <Button
          id="signupbtn"
          type="submit"
          fullWidth
          variant="contained"
          className="my-3"
          style={signupBtnStyle}
        >
          Sign up
        </Button>
      </Paper>
    </Grid>
  );
};
