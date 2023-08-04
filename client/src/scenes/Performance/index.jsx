import React from "react";
import { useSelector } from "react-redux";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";
import { useGetUserPerformanceQuery } from "state/api";

const Performance = () => {
  document.title = "Performance";
  const theme = useTheme();
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetUserPerformanceQuery(userId);
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
