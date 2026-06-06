import { Container, Typography, Box } from "@mui/material";

import React from "react";

import Navbar from "../Navbar";

import GridLayout from "../GridLayout";

import Sidebar from "../Sidebar";

import PostBrowser from "../PostBrowser";

const ExploreView = () => {

  return (
    <Container maxWidth="lg">

      {/* Navbar */}
      <Navbar />

      {/* Welcome Section */}
      <Box
        sx={{
          mb: 4,
          mt: 2,
          p: 3,
          borderRadius: "20px",
          background:
            "linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)",
          color: "white",
          boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          Welcome to SocialHub 🚀
        </Typography>

        <Typography mt={1} variant="body1">
          Connect with friends, share posts, explore trends and chat in real-time.
        </Typography>
      </Box>

      {/* Main Layout */}
      <GridLayout
        left={<PostBrowser createPost contentType="posts" />}
        right={<Sidebar />}
      />

    </Container>
  );
};

export default ExploreView;