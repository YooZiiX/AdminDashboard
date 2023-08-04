import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";

const Performance = () => {
  document.title = "Performance";
  const theme = useTheme();
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="Performance"
        subtitle="Track your affiliate Sales performance."
      />
      <Box></Box>
    </Box>
  );
};

export default Performance;
