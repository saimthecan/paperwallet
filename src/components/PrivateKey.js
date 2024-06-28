import React from "react";
import {
  Container,
  Box,
  Text,
  Heading,
  VStack,
  Link,
  Button
} from "@chakra-ui/react";

const PrivateKey = () => {
  const privateKey = process.env.REACT_APP_PRIVATE_KEY; // Retrieve private key from .env file

  return (
    <Container maxW="container.md" mt={{ base: "2rem", md: "4rem" }} p={4}>
      <Box
        p={6}
        boxShadow="lg"
        rounded="lg"
        bg="white"
        textAlign="center"
      >
        <Heading as="h1" size="xl" mb={4}>
          Private Key
        </Heading>
        <Box
          p={4}
          borderWidth={1}
          borderRadius="lg"
          bg="gray.50"
          color="gray.700"
          fontFamily="monospace"
          fontSize="lg"
          mb={6}
        >
          {privateKey}
        </Box>
        <VStack spacing={4}>
          <Text fontSize="2xl" color="teal.500">
          Birlikte geçireceğiniz her gün mutlulukla dolu olsun.
          </Text>
          <Link href="https://support.metamask.io/tr/managing-my-wallet/accounts-and-addresses/how-to-import-an-account/#importing-using-a-private-key" isExternal>
            <Button colorScheme="teal" size="lg">
              Private Key nasıl kullanılır?
            </Button>
          </Link>
        </VStack>
      </Box>
    </Container>
  );
};

export default PrivateKey;