import {  Typography } from "@mui/material";

export const UserKey = ({ keyname }) => {
  return (
    <Typography
      sx={{
        fontSize: "20px",
        fontWeight: "600",
        opacity: "0.4",
        textAlign: "right",
      }}
    >
      {keyname}
    </Typography>
  );
};

export const UserValue = ({ value }) => {
  return (
    <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#444" }}>
      {value}
    </Typography>
  );
};

export const Dots = ({ dots }) => {
  return (
    <>
      {dots.map((dot, index) => (
        <Typography
          key={index}
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            opacity: "0.4",
          }}
        >
          {dot}
        </Typography>
      ))}
    </>
  );
};


