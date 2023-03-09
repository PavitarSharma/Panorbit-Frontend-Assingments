import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { UserState } from "../context/UserContext";

const Card = () => {
  const { users } = UserState();



  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#f4f2f2",
          textAlign: "center",
          padding: "44px 0",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
        }}
      >
        <Typography
          variant="span"
          sx={{ fontWeight: "bold", fontSize: "24px" }}
        >
          Select an account
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "10px 20px 0px 20px",
          maxHeight: "500px",
          overflowY: "auto",
          borderRadius: "4px",
        }}
        className="scrollbar"
      >
        {users &&
          users.map((user) => {
            return (
              <Link
                to={`/profile/${user.id}`}
                key={user.id}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Stack direction="row" alignItems="center" gap="14px">
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    <img
                      src={user?.profilepicture}
                      alt={user?.name}
                      className="user_image"
                    />
                  </Box>
                  <Typography
                    variant="p"
                    sx={{ color: "#333", fontSize: "18px" }}
                  >
                    {user?.name}
                  </Typography>
                </Stack>
                <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
              </Link>
            );
          })}
      </Box>
    </Box>
  );
};

export default Card;
