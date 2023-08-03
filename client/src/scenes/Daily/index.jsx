import React, { useMemo, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import { useGetSalesQuery } from "state/api";

const Daily = () => {
  const theme = useTheme();
  const [startDate, setStartDate] = useState(new Date("2021-02-01"));
  const [endDate, setEndDate] = useState(new Date("2021-03-01"));
  const { data } = useGetSalesQuery();

  const [formattedData] = useMemo(() => {
    if (!data) return [];

    const { dailyData } = data;

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

    Object.values(dailyData).forEach(({ date, totalSales, totalUnits }) => {
      const dateFormatted = new Date(date);
      if (dateFormatted >= startDate && dateFormatted <= endDate) {
        const splitDate = date.substring(date.indexOf("-") + 1);

        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: splitDate, y: totalSales },
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: splitDate, y: totalUnits },
        ];
      }
    });

    const formattedData = [totalSalesLine, totalUnitsLine];
    return [formattedData];
  }, [data, startDate, endDate]);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Daily" subtitle="" />
      <Box height="75vh">
        <Box display="flex" justifyContent="flex-end">
          <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectedStart
            startDate={startDate}
            endDate={endDate}
          />
          <ReactDatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectedEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Daily;
