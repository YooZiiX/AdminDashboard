import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "../../components/Header";
import { useGetProductsQuery } from "state/api";

const Products = () => {
  return (
    <Box>
      <Header title="Products" subtitle=" See your list of products." />
      <Box></Box>
    </Box>
  );
};

export default Products;
