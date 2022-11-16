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

  return {
    successToast,
    errorToast,
  };
};

export default useCustomToast;
