import { Box, useColorModeValue, useColorMode, Flex } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      h="80px"
      bg={useColorModeValue("lightMode.navBgColor", "darkMode.navBgColor")}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>Citadel</Box>

      <Box onClick={() => toggleColorMode()}>
        {colorMode === "light" ? "Darkmode" : "Lightmode"}
      </Box>
    </Flex>
  );
};

export default Navbar;
