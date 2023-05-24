import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  root: {
    width: 600,
    maxWidth: "100%",
    border: "1px solid #eaeaea",
    borderRadius: "4px",
    margin: "40px auto",
    padding: "24px",
    backgroundColor: "#f6f6f6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  btnWrapper: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  }
};

function Hero() {
  return (
    <Box sx={styles.root}>
      <Typography variant="h1" gutterBottom>
        MERN Authentication
      </Typography>
      <Typography variant="body2" gutterBottom>
        This is a boilerplate for MERN authentication that stores a JWT in an
        HTTP-Only cookie. It also uses Redux Toolkit and Material UI.
      </Typography>
      <Box sx={styles.btnWrapper}>
        <Button variant="contained"><Link to="/login">Sign In</Link></Button>
        <Button variant="outlined"><Link to="/register">Sign Up</Link></Button>
      </Box>
    </Box>
  );
}

export default Hero;
