import { render } from "@testing-library/react";
import Student from "./Student";
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

test("Test Student", async () => {
  const { asFragment } = render(
    <Wrapper>
      <Student />
    </Wrapper>
  );

  expect(asFragment()).toMatchSnapshot();
});
