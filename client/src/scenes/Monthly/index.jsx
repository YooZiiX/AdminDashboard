import React, { useMemo } from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import { useGetSalesQuery } from "state/api";

const Monthly = () => {
  const theme = useTheme();
  const { data } = useGetSalesQuery();

  const [formattedData] = useMemo(() => {
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

    Object.values(monthlyData).forEach(({ month, totalSales, totalUnits }) => {
      totalSalesLine.data = [
        ...totalSalesLine.data,
        { x: month, y: totalSales },
      ];
      totalUnitsLine.data = [
        ...totalUnitsLine.data,
        { x: month, y: totalUnits },
      ];
    });

    const formattedData = [totalSales, totalUnits];
    return [formattedData];
  }, [data]);
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Monthly" subtitle="Chart of monthly sales." />
      <Box height="75vh">{data ? <></> : <>Loading...</>}</Box>
    </Box>
  );
};

export default Monthly;
