import { Box, Typography } from "@mui/material";

const WorkInProgress = () => (
  <Box
    sx={{
      height: "50vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <Typography variant='h1' sx={{ marginLeft: "auto", marginRight: "auto" }}>
      En desarrollo ...
    </Typography>
  </Box>
);

export default WorkInProgress;
