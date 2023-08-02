import React, { useState } from "react";
import {
  Box,
  useTheme,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import Header from "components/Header";
import OverviewChart from "components/OverviewChart";

const Overview = () => {
  document.title = "Overview";
  const [view, setView] = useState("units");
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="Overview"
        subtitle="Overview of general revenue and profit."
      />
      <Box></Box>
    </Box>
  );
};

export default Overview;
