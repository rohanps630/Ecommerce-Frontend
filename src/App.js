import React from "react";
import { Container, Paper, Typography, Grid } from "@mui/material"
import NewNavBar from "./components/Navbar/newNavBar.jsx";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Auth from "./components/Auth/Auth";
import About from "./components/About/About.jsx";
import PostDetails from "./components/PostDetails/PostDetails.jsx";



function App() {
  const users = JSON.parse(localStorage.getItem('profile'))
  return (
    <BrowserRouter >
      <Container maxWidth="xl">
        <NewNavBar />
      </Container>
      <Routes>
        <Route path="/" element={
          <Navigate to={'/posts'} />} />

        <Route path={'/posts'} element={
          <Container maxWidth="xl">
            <Home />
          </Container>} />

        <Route path={'/posts/search'} element={
          <Container maxWidth="xl">
            <Home />
          </Container>} />

        <Route path={'/posts'} element={
          <Container maxWidth="xl">
            <Home />
          </Container>} />
        <Route path={'/posts:id'} element={
          <Container maxWidth="xl">
            <PostDetails />
          </Container>} />

        <Route path="/auth" element={!users ?
          <Container maxWidth="xl">
            <Auth />
          </Container> : <Navigate to='/posts' />} />

        <Route path='/profile' element={<Profile users={users} />} />
        <Route path='/about' element={<About users={users} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
