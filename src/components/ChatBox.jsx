import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { UserState } from "../context/UserContext";

const ChatBox = () => {
  const { users } = UserState();
  return (
    <Box
      className="scrollbar"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
        height: "350px",
        overflowY: "auto",
      }}
      onClick={(event) => {
        event.stopPropagation()
      }}
    >
      {users &&
        users?.map((user, index) => (
          <Box
            key={user.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Stack direction="row" alignItems="center" gap="10px" pb="10px">
              <Box
                sx={{
                  width: "30px",
                  height: "30px",
                }}
              >
                <img
                  src={user?.profilepicture}
                  alt={user?.name}
                  className="user_image"
                />
              </Box>
              <Typography variant="span" sx={{ color: "#111" }}>
                {user?.name}
              </Typography>
            </Stack>
            {index % 2 === 0 ? (
              <Box
                sx={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "green",
                }}
              ></Box>
            ) : (
              <Box
                sx={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#999",
                }}
              ></Box>
            )}
          </Box>
        ))}
    </Box>
  );
};

export default ChatBox;
