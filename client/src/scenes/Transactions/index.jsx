import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import Header from "../../components/Header";

const Transactions = () => {
  return (
    <Box>
      <Header title="Transactions" subtitle="Entire list of transactions." />
    </Box>
  );
};

export default Transactions;
