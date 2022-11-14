import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import Student from "../../components/Student/Student";
import Tiles from "../../components/Tiles/Tiles";
import { dashboardInfo } from "../../state/actions/dashboardAction";

const Dashboard = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.login);
  const { userInfo } = state;

  const dash = useSelector((state) => state.dashboard);
  const { data } = dash;

  console.log(data);

  const user = JSON.parse(localStorage.getItem("userInfo"));

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(dashboardInfo(userInfo?.uid || user?.uid));
  };
  return (
    <Box>
      <Navbar />
      <Box width="80%" mx="auto" pb="40px">
        <Student data={data} />

        <Box mt="40px">
          <Text fontSize={["15px", "15px", "30px", "30px"]} textAlign="center">
            Subjects
          </Text>
          <Flex flexWrap="wrap" justifyContent="space-between">
            {data?.subjects?.map((data, i) => (
              <Box key={i} mt="45px">
                <Tiles data={data} key={i} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
