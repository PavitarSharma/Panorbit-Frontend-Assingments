import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Gallery from "./Gallery";
import Posts from "./Posts";
import Todo from "./Todo";
import UserDashboard from "./UserDashboard";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChatBox from "../components/ChatBox";
import { UserState } from "../context/UserContext";

const pages = {
  0: UserDashboard,
  1: Posts,
  2: Gallery,
  3: Todo,
};

const Profile = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const { id } = useParams();
  const [clickedId, setClickedId] = useState(0);
  const [page, setPage] = useState(0);
  const [openChatBox, setOpenChatBox] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { fetchSingleUser, users } = UserState();
  const btnRef = useRef();
  useEffect(() => {
    fetchSingleUser(id);
  }, [id, users]);

  // useEffect(() => {
  //   const closeChatbox = (event) => {

  //     if (btnRef.current && !btnRef.current.contains(event.target)) {
  //       setOpenChatBox(false);
  //     }
  //   };

  //   document.body.addEventListener("click", closeChatbox);

  //   return () => {
  //     document.body.removeEventListener("click", closeChatbox);
  //   };
  // }, []);

  useEffect(() => {
    if (openChatBox) {
      document.body.style.overflow = "hidden";
    }

    return () => (document.body.style.overflow = "");
  }, []);

  const GetPages = pages[page];
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;",
          borderRadius: "34px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5rem",
          // height: "100vh",
          gap: "1rem",
          position: "relative",
          marginBottom: "2rem",
        }}
      >
        <Box
          sx={{
            width: openSidebar ? "18rem" : "5rem",
            background:
              "linear-gradient(180deg, rgba(52,7,244,1) 16%, rgba(43,26,246,1) 55%, rgba(99,2,249,1) 97%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
            borderRadius: "34px",
          }}
        >
          <Sidebar
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
            clickedId={clickedId}
            setClickedId={setClickedId}
            setPage={setPage}
          />
        </Box>

        <Box sx={{ width: "100%", padding: "0 40px" }}>
          <GetPages />
        </Box>

        <Box
          className={openChatBox && "chatbox"}
          onClick={(event) => {
            setOpenChatBox(false);
            event.stopPropagation();
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: openChatBox ? "94px" : "0px",
              bottom: openChatBox ? "31.5%" : "-30px",
              zIndex: 1000,
            }}
            onClick={(event) => {
           
              event.stopPropagation();
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(43,26,246,1)",
                width: "330px",
                color: "white",
                padding: "12px 0",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                cursor: "pointer",
                position: "relative",
                height: "60px",
              }}
              onClick={() => {
                setOpenChatBox((prev) => !prev);
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 10px",
                }}
              >
                <Stack direction="row" gap="8px" alignItems="center">
                  <ChatBubbleOutlineIcon />
                  <Typography sx={{ fontWeight: 600 }}>Chats</Typography>
                </Stack>
                <ExpandLessIcon sx={{ fontSize: "30px" }} />
                {/* < ExpandMoreIcon /> */}
              </Box>
              {openChatBox ? (
                <Box
                  sx={{
                    position: "absolute",
                    top: "100%",
                    border: "1px solid rgba(43,26,246,1)",
                    width: "100%",
                    backgroundColor: "white",
                  }}
                >
                  <ChatBox />
                </Box>
              ) : null}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
