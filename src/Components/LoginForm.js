import React from "react";
import Button from "@mui/material/Button";

const LoginForm = () => {
  return (
    <div style={style.form}>
      <Button variant="contained" onClick={() => null}>
        Sign up
      </Button>
      <Button variant="outlined" onClick={() => null}>
        Sign in
      </Button>
    </div>
  );
};

const style = {
  form: {
    backgroundColor: "green",
  },
};

export default LoginForm;
