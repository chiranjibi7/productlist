import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Flex,
  useDisclosure,
  AlertDialogCloseButton,
} from "@chakra-ui/react";

const AlertDialogBox = ({ clicked }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <>
      <Button
        onClick={onOpen}
        type="submit"
        bgColor="rgb(173, 6, 6)"
        color="white"
        border="none"
        borderRadius="8px"
        outline="none"
        cursor="pointer"
        _hover={{ bgColor: "Red"}}
        width="50%"
        m="5px auto"
        height="40px"
      >
        DELETE
      </Button>
      <Flex justify="center" alignItems="center">
        <AlertDialog
          motionPreset="scale"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>Delete product?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Are you sure you want to delete this product? This will be
              deleted permanently.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme="red" ml={3} onClick={clicked}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Flex>
    </>
  );
};

export default AlertDialogBox;