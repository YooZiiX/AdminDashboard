import React from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import BreakdownChart from "components/BreakdownChart";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import OverviewChart from "components/OverviewChart";
import { useGetDashboardQuery } from "state/api";

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
