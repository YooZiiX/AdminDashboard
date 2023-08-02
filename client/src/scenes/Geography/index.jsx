import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";

const Geography = () => {
  document.title = "Geography";
  const theme = useTheme();
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Geography" subtitle="Find where your users are located." />
      <Box></Box>
    </Box>
  );
};

export default Geography;
