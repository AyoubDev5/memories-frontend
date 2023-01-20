import React from "react";
import { Container } from "@material-ui/core";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GoogleOAuthProvider
          // clientId={`${process.env.CLIENT_GOOGLE_API_OAUTH}`}
          clientId="id"
        >
          <Container maxWidth="lg">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/auth" element={<Auth />} />
            </Routes>
          </Container>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
