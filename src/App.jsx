import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accounts from "./pages/Accounts";
import Profile from "./pages/Profile";
import ScrollToTop from "./utils/ScrollToTop";
const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Box className="app">
        <Routes>
          <Route path="/" exact element={<Accounts />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
