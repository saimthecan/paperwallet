import React, { useState, useEffect } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import PrivateKey from './components/PrivateKey';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAuthenticated');
    if (isLoggedIn) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/privatekey" element={<PrivateRoute isAuthenticated={isAuthenticated} element={PrivateKey} />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
