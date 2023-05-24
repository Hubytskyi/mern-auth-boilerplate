import { useState, useEffect } from "react";
import {
  FormControl,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormContainer from "../../components/FormContainer/FormContainer";
import { useUpdateMutation } from "../../store/slices/usersApiSlice";
import { setCredentials } from "../../store/slices/authSlice";

const styles = {
  formItem: {
    width: "100%",
    marginBottom: "24px",
  },
};

function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const [update, { isLoading }] = useUpdateMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.name, userInfo.email]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await update({ _id: userInfo._id, name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Successfully updated");
    } catch (err) {
      console.log(err);
      toast.error(err?.data || err.error || err.message || err);
    }
  }

  return (
    <FormContainer onSubmit>
      <Typography variant="h1" sx={styles.formItem}>
        Update Profile
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
          disabled={isLoading}
          endIcon={isLoading && <CircularProgress size={20} />}
        >
          Update
        </Button>
      </FormControl>
    </FormContainer>
  );
}

export default Profile;
