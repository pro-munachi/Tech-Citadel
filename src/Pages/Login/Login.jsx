import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useCustomToast from "../../shared-components/Toast";
import { userLogin } from "../../state/actions/login";

function Login() {
  const [username, setUsername] = useState("madu");
  const [password, setPassword] = useState("12345");
  const [type, setType] = useState("password");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { successToast, errorToast } = useCustomToast();

  const state = useSelector((state) => state.login);
  const { userInfo, error } = state;

  useEffect(() => {
    if (userInfo) {
      successToast("Login Successful");
      navigate("/");
    }
  }, [userInfo, navigate, successToast]);

  const submit = () => {
    dispatch(userLogin(username, password));
    if (error === "Invalid Username or Password") {
      errorToast(error);
    }
  };

  return (
    <Box height="100%">
      <Flex h="100vh" my="auto" alignItems="center" width="50%" mx="auto">
        <Box w="100%">
          <Input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type={"text"}
            width="100%"
            my="10px"
          />

          <Box w="100%" pos="relative">
            <Input
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={type}
              my="10px"
            />
            <Text
              pos="absolute"
              bottom="20px"
              right="12px"
              onClick={() => setType(type === "password" ? "text" : "password")}
              cursor="pointer"
              fontSize="13px"
            >
              {type === "password" ? "Show" : "Hide"}
            </Text>
          </Box>

          <Button
            type="button"
            onClick={() => {
              submit();
            }}
            w="100px"
            mx="auto"
          >
            login
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default Login;
