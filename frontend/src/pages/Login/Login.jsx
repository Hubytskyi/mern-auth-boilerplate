import { useState, useEffect } from "react";
import { FormControl, TextField, Button, Typography, CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import FormContainer from "../../components/FormContainer/FormContainer";
import { useLoginMutation } from "../../store/slices/usersApiSlice";
import { setCredentials } from "../../store/slices/authSlice";

const styles = {
  formItem: {
    width: "100%",
    marginBottom: "24px",
  },
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, {isLoading}] = useLoginMutation();

  const { userInfo } = useSelector(state => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await login({email, password}).unwrap();
      dispatch(setCredentials({...res}));
      navigate('/');
    } catch (err) {
      console.log(err)
      toast.error(err?.data || err.error || err.message || err);
    }
  }

  return (
    <FormContainer onSubmit>
      <Typography variant="h1" sx={styles.formItem}>
        Sign In
      </Typography>
      <FormControl sx={styles.form} fullWidth={true}>
        <TextField
          required
          id="email"
          sx={styles.formItem}
          label="Email"
          variant="outlined"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <TextField
          required
          id="password"
          sx={styles.formItem}
          label="Password"
          variant="outlined"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <Button variant="contained" onClick={handleSubmit} sx={styles.formItem} size="large" disabled={isLoading} endIcon={isLoading && <CircularProgress size={20}/>}>
          Submit
        </Button>
        <Typography variant="caption" sx={styles.formItem}>
          New Customer?
            <Link to="/register"><Button variant="text" size="small">Sign Up</Button></Link>
        </Typography>
      </FormControl>
    </FormContainer>
  );
}

export default Login;
