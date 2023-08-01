import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";

const Geography = () => {
  document.title = "Geography";
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Geography" subtitle="Find where your users are located." />
      <Box></Box>
    </Box>
  );
};

export default Geography;
