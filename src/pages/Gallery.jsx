import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

const Gallery = () => {
  return (
    <>
      <Navbar title="Gallery" />
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "62px",
            fontWeight: 700,
            marginBottom: "calc(100vh - 500px)",
            opacity: 0.3,
            color: "#999",
          }}
        >
          Comming Soon
        </Typography>
      </Box>
    </>
  );
};

export default Gallery;
