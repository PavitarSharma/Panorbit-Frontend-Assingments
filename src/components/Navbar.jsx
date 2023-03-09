import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { UserState } from "../context/UserContext";
import Modal from "./Modal";

const Navbar = ({ title }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(!openModal);
  const handleCloseModal = () => setOpenModal(false);
  const containerRef = useRef();
  useEffect(() => {
    const closeModal = (event) => {
      // console.log(event.path);
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpenModal(false);
      }
    };

    document.body.addEventListener("click", closeModal);

    return () => {
      document.body.removeEventListener("click", closeModal);
    };
  }, []);

  const { userDetails } = UserState();
  return (
    <Box
      sx={{
        padding: "40px 0",
        width: "100%",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        marginBottom="20px"
      >
        <Typography sx={{ fontSize: "34px", color: "#777", fontWeight: "700" }}>
          {title}
        </Typography>
        <Box
          onClick={handleOpenModal}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            position: "relative",
            cursor: "pointer",
          }}
          ref={containerRef}
        >
          <Box
            sx={{
              width: "40px",
              height: "40px",
              position: "relative",
            }}
          >
            <img
              src={
                userDetails?.profilepicture
                  ? userDetails?.profilepicture
                  : "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
              }
              alt={userDetails?.name ? userDetails?.name : "Leanne Graham"}
              className="user_image"
            />
          </Box>
          <Typography sx={{ color: "#555", fontSize: "20px" }}>
            {userDetails?.name ? userDetails?.name : "Leanne Graham"}
          </Typography>

          {openModal ? (
            <Modal openModal={openModal} setOpenModal={setOpenModal} />
          ) : null}
        </Box>
      </Stack>
      <Divider />
    </Box>
  );
};

export default Navbar;
