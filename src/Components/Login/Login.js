import TextField from "@material-ui/core/TextField";
import React, { useState, useContext } from "react";
import { Button, Paper } from "@material-ui/core";
import { useSession } from "../Context/Provider";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const session = useSession();

  const onUsernameChange = (e) => setUsername(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = async () => {
    session(username,password);
  }

  const handleReset = () => {
    setUsername("");
    setPassword("");
  } 

  return (
    <Paper>
      <h2>Login</h2>

      <TextField
        onChange={onUsernameChange}
        value={username}
        label={"Username"} //optional
      />
      <TextField
        onChange={onPasswordChange}
        value={password}
        type="password"
        label={"Password"} //optional
      />

      <Button onClick={handleSubmit}>Login</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Paper>
  );
};