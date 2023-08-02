import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetGeographyQuery } from "state/api";
import Header from "components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "state/geoData";

const Geography = () => {
  document.title = "Geography";
  const theme = useTheme();
  const { data } = useGetGeographyQuery();
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Geography" subtitle="Find where your users are located." />
      <Box></Box>
    </Box>
  );
};

export default Geography;
