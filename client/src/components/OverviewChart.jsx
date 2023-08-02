import React, { useMemo } from "react";
import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { useGetSalesQuery } from "state/api";

const OverviewChart = ({ isDashboard = false, view }) => {
  const theme = useTheme();
  const { data, isLoading } = useGetSalesQuery();
  const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    if (!data) return [];
    const { monthlyData } = data;
    const totalSalesLine = {
      id: "totalSales",
      color: theme.palette.secondary.main,
      data: [],
    };
    const totalUnitsLine = {
      id: "totalUnits",
      color: theme.palette.secondary[600],
      data: [],
    };

    Object.values(monthlyData).reduce(
      (acc, { month, totalSales, totalUnits }) => {
        const curSales = acc.sales + totalSales;
        const curUnits = acc.units + totalUnits;

        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: month, y: curSales },
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: month, y: curUnits },
        ];

        return { sales: curSales, units: curUnits };
      },
      { sales: 0, units: 0 }
    );
  }, [data]);

  if (!data || isLoading) return "Loading...";

  return <div>OverviewChart</div>;
};

export default OverviewChart;