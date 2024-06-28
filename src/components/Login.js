import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
  Image,
  Alert,
  AlertTitle,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { WarningIcon, ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@chakra-ui/react";
import logo from './logo.png';

const SUCCESSFUL_PASSWORD = process.env.REACT_APP_SUCCESSFUL_PASSWORD;

export const Login = ({ setIsAuthenticated }) => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === SUCCESSFUL_PASSWORD) {
      toast({
        title: "Successful login.",
        description: "Welcome!",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right"
      });
      setIsAuthenticated(true);
      navigate('/privatekey');
    } else {
      setShowError(true);
    }
  };

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showError]);

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Box
          width={["95%", "70%", "60%", "50%", "30%"]}
          marginTop={'-4rem'}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4} >
            <Image
              src={logo}
              marginLeft={'auto'}
              marginRight={'auto'}
              width={'12rem'}
              cursor={'pointer'}
            />
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <IconButton
                    h="1.75rem"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />} aria-label={showPassword ? 'Hide password' : 'Show password'} />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            {showError && (
              <Alert status="error" borderRadius="md" mt={2} marginTop="-0.8rem">
                <WarningIcon boxSize={4} mr={2} />
                <AlertTitle fontSize="16px">Password did not match!</AlertTitle>
              </Alert>
            )}
            <Button
              type="submit"
              bg={'black'}
              color={'white'}
              _hover={{
                bg: '#44337A',
              }}
             >
              Log in
            </Button>
          </Stack>
        </Box>
      </Flex>
    </form>
  );
};

export default Login;
