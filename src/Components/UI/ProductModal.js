import React from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  ModalHeader,
  Textarea,
  ModalCloseButton,
} from "@chakra-ui/react";

const ProductModal=({
  productName,
  productCategory,
  productCode,
  productDescription,
  productStatus,
  addProduct,
})=>{
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();


  return (
    <div>
        <Button onClick={onOpen}>Add Product</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="Red" fontWeight="bold" fontSize="25px">
              Add Your Product
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Product Name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Product name"
                  onChange={productName}
                />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Code</FormLabel>
                <Input placeholder="Product code" onChange={productCode} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Category</FormLabel>
                <Input
                  placeholder="Product Category"
                  onChange={productCategory}
                />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Product Description"
                  onChange={productDescription}
                />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Status</FormLabel>
                <Input placeholder="Product Status" onChange={productStatus} />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={addProduct}>
                ADD PRODUCT
              </Button>
              <Button
                onClick={onClose}
                bgColor="Red"
                color="white"
                _hover={{ bgColor: "rgb(173, 6, 6)" }}
              >
                CANCEL
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
  );
}

export default ProductModal;


              
