import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

export const Formm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    if (username === "hostelite" && password === "123123") {
      navigate("/adminHome");
    }
  };

  const linkstyle = {
    textDecoration: "none",
    cursor: "pointer",
  };

  const signinBtnStyle = {
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
          <h4 className="my-2">SIGN IN</h4>
        </Grid>
        <TextField
          id="namefield"
          label="Username"
          className="my-2"
          fullWidth
          required
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          id="passwordfield"
          label="Password"
          type="password"
          className="my-2"
          fullWidth
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <FormGroup className="my-2">
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
        </FormGroup>
        <Button
          id="signinbtn"
          type="submit"
          fullWidth
          variant="contained"
          className="my-3"
          style={signinBtnStyle}
          onClick={signIn}
        >
          Sign in
        </Button>
        <Typography>
          <Link style={linkstyle}>Forgot password?</Link>
        </Typography>
        <Typography>
          Do you have an account?
          <Link style={linkstyle}>Sign up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
