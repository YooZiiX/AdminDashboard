import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "scenes/Layout";
import Dashboard from "scenes/Dashboard";
import Products from "scenes/Products";
import Customers from "scenes/Customers";
import Transactions from "scenes/Transactions";
import Geography from "scenes/Geography";
import Overview from "scenes/Overview";
import Daily from "scenes/Daily";
import Monthly from "scenes/Monthly";
import Breakdown from "scenes/Breakdown";
import Admins from "scenes/Admins";
import Performance from "scenes/Performance";

function Router({ theme }) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/breakdown" element={<Breakdown />} />
            <Route path="/admins" element={<Admins />} />
            <Route path="/performance" element={<Performance />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Router;
