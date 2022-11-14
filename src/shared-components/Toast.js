import { useToast } from "@chakra-ui/react";
const useCustomToast = () => {
  const toast = useToast();

  const successToast = (
    successMsg = "Operation successful",
    pos = "top-right"
  ) => {
    return toast({
      status: "success",
      title: "Success",
      description: successMsg,
      position: pos,
      isClosable: true,
    });
  };
  const errorToast = (errorMessage = "Error occurred", pos = "top-right") => {
    return toast({
      status: "error",
      title: "Error",
      description: errorMessage,
      position: pos,
      isClosable: true,
    });
  };
  const infoToast = (infoMessage, duration) => {
    return toast({
      status: "info",
      title: "Info",
      description: infoMessage,
      position: "top-right",
      isClosable: true,
      duration: duration,
    });
  };
  return {
    successToast,
    errorToast,
    infoToast,
  };
};

export default useCustomToast;
