import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";

const Dashboard = () => {
  document.title = "Dashboard";
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Dashboard" subtitle="Welcome to your Dashboard." />
      <Box></Box>
    </Box>
  );
};

export default Dashboard;
