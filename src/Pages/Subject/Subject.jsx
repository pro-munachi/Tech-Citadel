import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { subjectInfo } from "../../state/actions/subjectAction";

const Subject = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.login);
  const { userInfo } = state;

  const subject = useSelector((state) => state.subjects);
  const { data } = subject;

  console.log(data);

  const { id } = useParams();

  const user = JSON.parse(localStorage.getItem("userInformations"));

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(subjectInfo(userInfo?.uid || user?.uid, id));
  };
  return (
    <Box>
      <Navbar />

      <Box
        w="80%"
        mx="auto"
        mt="30px"
        bg={useColorModeValue("lightMode.mainBgColor", "darkMode.mainBgColor")}
        p="20px"
      >
        <Box>
          <Text>Subject: {data?.name}</Text>
          <Text>Teacher: {data?.teacher}</Text>
          <Text>Assessment: {data?.assessment}</Text>
          <Text>Exam: {data?.exam}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Subject;
