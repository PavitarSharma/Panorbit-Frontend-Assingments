import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserState } from "../context/UserContext";

const Modal = ({ setOpenModal, openModal }) => {
  const { userDetails, users } = UserState();
  const navigate = useNavigate();

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    }

    return () => (document.body.style.overflow = "");
  }, []);
  const user1 = users[Math.floor(Math.random() * users.length)];
  const user2 = users[Math.floor(Math.random() * users.length)];
  const logout = () => navigate("/");
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.05)",
        overflowY: "scroll",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "150px",
          zIndex: 100,
          overflowY: "scroll",
          height: "100%",
          borderRadius: "30px"
        }}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <Box
          sx={{
            width: { sm: "400px", xs: "300px" },
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;",
            borderRadius: "30px",
            background: "white",
            padding: "40px",
          }}
        >
          <Stack>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={userDetails?.profilepicture}
                  alt={userDetails?.name}
                  className="user_image"
                />
              </Box>
              <Typography variant="p" sx={{ fontSize: "20px" }}>
                {userDetails?.name}
              </Typography>
              <Typography variant="p" sx={{ fontSize: "17px", opacity: 0.6 }}>
                {userDetails?.email}
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Box
                  sx={{
                    width: "45px",
                    height: "45px",
                  }}
                >
                  <img
                    src={user1?.profilepicture}
                    alt={user1?.name}
                    className="user_image"
                  />
                </Box>
                <Typography variant="p" fontSize="18px">
                  {user1?.name}
                </Typography>
              </Box>
            </Box>

            <Divider />

            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Box
                  sx={{
                    width: "45px",
                    height: "45px",
                  }}
                >
                  <img
                    src={user2?.profilepicture}
                    alt={user2?.name}
                    className="user_image"
                  />
                </Box>
                <Typography variant="p" fontSize="18px">
                  {user2?.name}
                </Typography>
              </Box>

              <Box
                sx={{
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: "red",
                    textTransform: "capitalize",
                    fontWeight: 600,
                    cursor: "pointer",
                    padding: "10px 20px",
                    borderRadius: "25px",
                    textAlign: "center",
                    "&:hover": {
                      background: "red",
                    },
                  }}
                  type="button"
                  onClick={logout}
                >
                  Sign out
                </Button>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Modal;
