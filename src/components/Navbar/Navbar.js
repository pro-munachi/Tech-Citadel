import { Box, useColorModeValue, useColorMode, Flex } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      h="80px"
      bg={useColorModeValue("lightMode.mainBgColor", "darkMode.mainBgColor")}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>School</Box>

      <Box onClick={() => toggleColorMode()}>
        {colorMode === "light" ? "Darkmode" : "Lightmode"}
      </Box>
    </Flex>
  );
};

export default Navbar;
