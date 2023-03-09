import { Box } from "@mui/material";
import React from "react";
import Card from "../components/Card";

const Accounts = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginBottom: "5rem",
       
      }}
    >
      <Box
        sx={{
          maxWidth: "650px",
          width: "100%",
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          borderRadius: "30px",
          position: "absolute",
          top: "20%",
     
        }}
      >
        <Card />
      </Box>
    </Box>
  );
};

export default Accounts;
