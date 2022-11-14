import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
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
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        width="80%"
        mx="auto"
        mt="30px"
      >
        {data?.map((data, i) => (
          <Box key={i} mt="45px">
            <Tiles data={data} key={i} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Dashboard;
