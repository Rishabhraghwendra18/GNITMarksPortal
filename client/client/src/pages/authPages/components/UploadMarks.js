import React from "react";
import {
  Button,
  Select,
  Checkbox,
  Input,
  FormControl,
  FormLabel,
  HStack,
  Stack,
} from "@chakra-ui/react";

function UploadMarks() {
  return (
    <div className="UploadMarks flex__container">
      <div className="Form">
      <FormControl width="50%">
          <HStack spacing="24px" marginBottom="1rem">
            <FormLabel fontSize="1.5rem">Name</FormLabel>
            <Input
              type="text"
              border="6px solid black"
              boxSizing="border-box"
            ></Input>
          </HStack>
          <HStack spacing="24px" marginBottom="1rem">
            <FormLabel fontSize="1.5rem" boxSizing="border-box">
              ID
            </FormLabel>
            <Input
              type="text"
              border="6px solid black"
              boxSizing="border-box"
            ></Input>
          </HStack>
          <HStack spacing="24px" marginBottom="1rem">
            <FormLabel fontSize="1.5rem">Subject Marks</FormLabel>
            <Input
              type="number"
              border="6px solid black"
              boxSizing="border-box"
            ></Input>
          </HStack>
          <Stack spacing="23px" marginBottom="1rem" direction="row">
            <Button
              loadingText="Submitting"
              colorScheme="blue"
              fontSize="1.5rem"
            >
              Upload Marks
            </Button>
            <Button
              loadingText="Submitting"
              colorScheme="red"
              fontSize="1.5rem"
            >
              Cancel
            </Button>
          </Stack>
        </FormControl>
      </div>
    </div>
  );
}

export default UploadMarks;
