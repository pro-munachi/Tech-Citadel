import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
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

test("Test Navbar", async () => {
  const { asFragment } = render(
    <Wrapper>
      <Navbar />
    </Wrapper>
  );

  expect(asFragment()).toMatchSnapshot();
});
