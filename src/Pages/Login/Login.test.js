import { render } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import store from "../../state/store";
import { Provider } from "react-redux";

const Wrapper = ({ children }) => {
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  </ChakraProvider>;
};

test("Test Login", async () => {
  const { asFragment } = render(
    <Wrapper>
      <Login />
    </Wrapper>
  );

  expect(asFragment()).toMatchSnapshot();
});
