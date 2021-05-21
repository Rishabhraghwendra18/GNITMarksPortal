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

function AccountSignUp() {
  return (
    <div className="AccountSignUp flex__container">
      <div className="Form">
        <FormControl id="email" width="50%">
          <HStack spacing="24px" marginBottom="1rem">
            <FormLabel fontSize="1.5rem">Name</FormLabel>
            <Input
              type="text"
              border="6px solid black"
              boxSizing="border-box"
            ></Input>
          </HStack>
          <HStack spacing="45px" marginBottom="1rem">
            <FormLabel fontSize="1.5rem" boxSizing="border-box">
              ID
            </FormLabel>
            <Input
              type="text"
              border="6px solid black"
              boxSizing="border-box"
            ></Input>
          </HStack>
          <HStack spacing="45px" marginBottom="1rem">
            <FormLabel fontSize="1.5rem" boxSizing="border-box">
              Semester
            </FormLabel>
            <Select
              placeholder="medium size"
              size="lg"
              border="6px solid black"
              boxSizing="border-box"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <HStack spacing="45px" marginBottom="1rem">
            <FormLabel fontSize="1.5rem" boxSizing="border-box">
              Branch
            </FormLabel>
            <Select
              placeholder="large size"
              size="lg"
              border="6px solid black"
              boxSizing="border-box"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <FormLabel fontSize="1.7rem">Role:</FormLabel>
          <Stack
            spacing="23px"
            marginBottom="1rem"
            direction="column"
            padding="1rem"
          >
            <Checkbox size="lg">Student</Checkbox>
            <Checkbox size="lg">Teacher</Checkbox>
          </Stack>
          <FormLabel fontSize="1.7rem">If a teacher:</FormLabel>
          <Stack spacing="23px" marginBottom="1rem" direction="row">
            <FormLabel fontSize="1.5rem" boxSizing="border-box">
              Subject
            </FormLabel>
            <Select
              placeholder="large size"
              size="lg"
              border="6px solid black"
              boxSizing="border-box"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Stack>
          <Stack spacing="23px" marginBottom="1rem" direction="row">
            <Button
              loadingText="Submitting"
              colorScheme="blue"
              fontSize="1.5rem"
            >
              Create Account
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

export default AccountSignUp;
