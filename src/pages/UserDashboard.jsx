import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import { Dots, UserKey, UserValue } from "../components/UserDetails";
import { UserState } from "../context/UserContext";

const UserDashboard = () => {
  const { userDetails } = UserState();
  return (
    <>
      <Navbar title="Profile" />
      <Box
        sx={{
          display: "flex",
          //   justifyContent: "space-between",
          gap: "40px",
          padding: "20px 0 40px 0",
          flexDirection: { lg: "row", xs: "column" },
          alignItems: { lg: "start", xs: "center" },
        }}
      >
        {/* Left section */}
        <Box
          sx={{
            width: { lg: "50%", xs: "100%" },
          }}
        >
          {/* Top Section */}
          <Stack>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "10px",
                }}
              >
                <Box
                  sx={{
                    width: { md: "280px", xs: "200px" },
                    height: { md: "280px", xs: "200px" },
                  }}
                >
                  <img
                    src={userDetails?.profilepicture}
                    alt={userDetails?.username}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </Box>

                <Typography
                  variant="p"
                  sx={{
                    fontSize: "24px",
                    fontWeight: 600,
                    opacity: 0.6,
                    color: "#111",
                  }}
                >
                  {userDetails?.name}
                </Typography>
              </Box>

              <Stack direction="row" gap="20px">
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <UserKey keyname="Username" />
                  <UserKey keyname="e-mail" />
                  <UserKey keyname="Phone" />
                  <UserKey keyname="Website" />
                </Box>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Dots dots={[":", ":", ":", ":"]} />
                </Box>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <UserValue value={userDetails?.username} />
                  <UserValue value={userDetails?.email} />
                  <UserValue value={userDetails?.phone} />
                  <UserValue value={userDetails?.website} />
                </Box>
              </Stack>
            </Box>

            <Divider sx={{ marginTop: "20px" }} />

            {/* Bottom Section */}

            <Stack alignItems="center">
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "600",
                  opacity: "0.5",
                  textAlign: "center",
                  margin: "14px 0",
                }}
              >
                Company
              </Typography>

              {/* Company Data */}
              <Stack direction="row" gap="20px">
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <UserKey keyname="Name" />
                  <UserKey keyname="catchphrase" />
                  <UserKey keyname="bs" />
                </Box>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Dots dots={[":", ":", ":"]} />
                </Box>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <UserValue value={userDetails?.company.name} />
                  <UserValue value={userDetails?.company.catchPhrase} />
                  <UserValue value={userDetails?.company.bs} />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* <Divider
          orientation="vertical"
          sx={{ height: "auto", marginLeft: "40px", marginRight: "20px" }}
        /> */}
        <Box
          sx={{
            width: "2px",
            height: "850px",
            background: "#999",
            opacity: "0.4",
            margin: "0 20px",
            display: { lg: "block", xs: "none" },
          }}
        ></Box>

        <Box
          sx={{
            width: "100%",
            height: "1px",
            background: "#999",
            opacity: "0.4",
            padding: "0 20px",
            display: { lg: "none", xs: "block" },
          }}
        ></Box>

        {/* Right Section */}
        <Box
          sx={{
            width: "100%",
          }}
        >
          {/* Upper */}
          <Stack>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "600",
                opacity: "0.5",
                margin: "14px 0",
              }}
            >
              Address
              <span>&#58;</span>
            </Typography>
            <Stack
              direction="row"
              gap="20px"
              sx={{ marginLeft: "40px", marginBottom: "20px" }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <UserKey keyname="Street" />
                <UserKey keyname="Suite" />
                <UserKey keyname="City" />
                <UserKey keyname="Zipcode" />
              </Box>

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <Dots dots={[":", ":", ":", ":"]} />
              </Box>

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <UserValue value={userDetails?.address.street} />
                <UserValue value={userDetails?.address.suite} />
                <UserValue value={userDetails?.address.city} />
                <UserValue value={userDetails?.address.zipcode} />
              </Box>
            </Stack>
          </Stack>
          {/* Down */}
          <Box
            sx={{
              width: "100%",
              height: "500px",
              maxWidth: "100%",
            }}
          >
            <img
              src="https://i.stack.imgur.com/B6fEt.png"
              alt="map"
              style={{
                width: "100%",
                height: " 100%",
                objectFit: "cover",
                borderRadius: "30px",
              }}
            />
            {/* <Map
              latitude={+userDetails?.address.geo.lat}
              longitude={+userDetails?.address.geo.lng}
              
            /> */}
          </Box>
          <Box
            sx={{
              dispaly: "flex",
              alignItems: "center",
              gap: "20px",
              textAlign: { md: "right", xs: "center" },
              width: "100%",
              marginTop: "20px",
              marginLeft: { md: "-40px" },
            }}
          >
            <Typography
              variant="p"
              sx={{ fontSize: "20px", marginRight: "18px" }}
            >
              <span style={{ fontSize: "16px", opacity: 0.6 }}>Lat</span>:
              <span
                style={{ fontWeight: "bold", opacity: 0.75, marginLeft: "8px" }}
              >
                {userDetails?.address.geo.lat}
              </span>
            </Typography>
            <Typography variant="p" sx={{ fontSize: "18px" }}>
              <span style={{ fontSize: "16px", opacity: 0.6 }}>Long</span>:
              <span
                style={{ fontWeight: "bold", opacity: 0.75, marginLeft: "4px" }}
              >
                {userDetails?.address.geo.lng}
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserDashboard;
