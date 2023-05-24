import { useState } from "react";
import { FormControl, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FormContainer from "../../components/FormContainer/FormContainer";

const styles = {
  formItem: {
    width: "100%",
    marginBottom: "24px",
  },
};

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("submit");
  }

  return (
    <FormContainer onSubmit>
      <Typography variant="h1" sx={styles.formItem}>
        Sign Up
      </Typography>
      <FormControl sx={styles.form} fullWidth={true}>
        <TextField
          required
          id="name"
          sx={styles.formItem}
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          error={false}
          required
          id="email"
          sx={styles.formItem}
          label="Email"
          variant="outlined"
          helperText={false && "this email is already in use"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          error={false}
          required
          id="password"
          sx={styles.formItem}
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <TextField
          error={false}
          required
          id="confirmPassword"
          sx={styles.formItem}
          label="Confirm Password"
          variant="outlined"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={styles.formItem}
          size="large"
        >
          Submit
        </Button>
        <Typography variant="caption" sx={styles.formItem}>
          Already have an account?
          <Link to="/login">
            <Button variant="text" size="small">
              Sign In
            </Button>
          </Link>
        </Typography>
      </FormControl>
    </FormContainer>
  );
}

export default Register;
