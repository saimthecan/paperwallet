import React from "react";
import { Container } from "@chakra-ui/react";

const PrivateKey = () => {
  return (
    <Container maxW="container.xl" mt={{ base: "-1.5rem", md: "0" }}>
      <h1>Private Key Page</h1>
      <p>This is a protected route. Only accessible if logged in.</p>
    </Container>
  );
};

export default PrivateKey;
