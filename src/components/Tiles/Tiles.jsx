import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Tiles = ({ data }) => {
  return (
    <Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        h="190px"
        w="190px"
        bg={useColorModeValue("lightMode.mainBgColor", "darkMode.mainBgColor")}
        borderRadius="10px"
      >
        <Text>{data?.name}</Text>
        <Text>{data?.teacher}</Text>

        <Button mt="14px" fontSize="13px" h="30px">
          <Link
            to={`/subjects/${data?.id}`}
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            More
          </Link>
        </Button>
      </Flex>
    </Box>
  );
};

export default Tiles;
