import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";

const Monthly = () => {
  const theme = useTheme();
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Monthly" subtitle="Chart of monthly sales." />
      <Box height="75vh"></Box>
    </Box>
  );
};

export default Monthly;
