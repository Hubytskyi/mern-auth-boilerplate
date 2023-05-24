import { Box } from '@mui/material'

const styles = {
    root: {
      width: 600,
      maxWidth: "100%",
      borderRadius: "4px",
      margin: "40px auto",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
    },
  };

function FormContainer({children}) {
  return (
    <Box sx={styles.root}>{children}</Box>
  )
}

export default FormContainer