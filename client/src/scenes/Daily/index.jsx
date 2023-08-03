import React, { useMemo, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import { Box, useTheme } from "@mui/material";
import Header from "components/Header";
import { useGetSalesQuery } from "state/api";

const Daily = () => {
  const theme = useTheme();
  const [startDate, setSstartDate] = useState(new Date("2021-02-01"));
  const [endDate, setEndDate] = useState(new Date("2021-03-01"));
  const { data } = useGetSalesQuery();
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Daily" subtitle="" />
      <Box></Box>
    </Box>
  );
};

export default Daily;
