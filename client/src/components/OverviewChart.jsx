import React, { useMemo } from "react";
import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { useGetSalesQuery } from "state/api";

const OverviewChart = ({ isDashboard = false, view }) => {
  const theme = useTheme();
  const { data, isLoading } = useGetSalesQuery();
  return <div>OverviewChart</div>;
};

export default OverviewChart;
