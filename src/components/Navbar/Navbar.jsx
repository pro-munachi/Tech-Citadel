import {
  Box,
  useColorModeValue,
  useColorMode,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      h="80px"
      bg={useColorModeValue("lightMode.navBgColor", "darkMode.navBgColor")}
      justifyContent="space-between"
      alignItems="center"
      color="white"
    >
      <Box
        ml="15px"
        fontSize={["20px", "20px", "28px", "28px"]}
        data-testid="logo"
      >
        <Link to="/">Citadel</Link>
      </Box>

      <Box onClick={() => toggleColorMode()} mr="15px" data-testid="toggle">
        <Button>{colorMode === "light" ? "Darkmode" : "Lightmode"}</Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
