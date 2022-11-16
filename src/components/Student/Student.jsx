import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Student = ({ data }) => {
  return (
    <Flex mt="60px" alignItems="center" flexWrap="wrap">
      <Box>
        <Image
          src={data?.image}
          alt={data?.name}
          h="230px"
          w="230px"
          maxH="230px"
          maxW="230px"
        />
      </Box>

      <Box ml="20px">
        <Text>Full Name: {data?.name}</Text>
        <Text>Username: {data?.username}</Text>
        <Text>Class: {data?.class}</Text>
      </Box>
    </Flex>
  );
};

export default Student;
