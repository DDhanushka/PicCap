import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { spacing } from "@mui/system";

const LoginForm = () => {
  return (
    <Box sx={{ mx: "auto", width: 600 }}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained" onClick={() => null}>
        Sign up
      </Button>
      <Button variant="outlined" onClick={() => null}>
        Sign in
      </Button>
      <Text>Forgot Password</Text>
      <Button variant="outlined" onClick={() => null}>
        Forgot Password
      </Button>
    </Box>
  );
};

const style = {
  form: {
    display: "flex",
    flexDirection: "center",
  },
};

export default LoginForm;
