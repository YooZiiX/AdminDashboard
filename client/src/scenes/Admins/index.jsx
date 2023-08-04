import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";
import { useGetAdminsQuery } from "state/api";

const Admins = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Admins" subtitle="Managing admins and list of admins." />
      <Box></Box>
    </Box>
  );
};

export default Admins;
