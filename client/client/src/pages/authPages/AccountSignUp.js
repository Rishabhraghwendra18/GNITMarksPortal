import React,{useState} from "react";
import semestersAndSubjects from "./dataForPages";
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
  const [isStudent,setIsStudent]=useState(null);
  const [semesterIndex,setSemesterIndex]=useState();
  return (
    <div className="AccountSignUp flex__container">
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
              placeholder="select semester"
              size="lg"
              border="6px solid black"
              boxSizing="border-box"
              onChange={e=>setSemesterIndex(e.target.value)}
            >
             {
               semestersAndSubjects.map((e,index)=><option key={index}value={index}>{e.semester}</option>)
             }
            </Select>
          </HStack>          
          <FormLabel fontSize="1.7rem">Role:</FormLabel>
          <Stack
            spacing="23px"
            marginBottom="1rem"
            direction="column"
            padding="1rem"
          >
            <Checkbox size="lg" onChange={()=>{setIsStudent(true)}}>Student</Checkbox>
            <Checkbox size="lg"onChange={()=>setIsStudent(false)}>Teacher</Checkbox>
          </Stack>
          <FormLabel fontSize="1.7rem">If a teacher:</FormLabel>
          <Stack spacing="23px" marginBottom="1rem" direction="row">
            <FormLabel fontSize="1.5rem" boxSizing="border-box">
              Subject
            </FormLabel>
            <Select
              placeholder="Select Subject"
              size="lg"
              border="6px solid black"
              boxSizing="border-box"
              isDisabled={isStudent}
            >
             {
               semestersAndSubjects[semesterIndex]?.subjects.map((e,index)=><option key={index}value={e}>{e}</option>)
             }
            </Select>
          </Stack>
          <HStack spacing="45px" marginBottom="1rem">
            <FormLabel fontSize="1.5rem" boxSizing="border-box">
              Branch
            </FormLabel>
            <Select
              placeholder="Select Branch"
              size="lg"
              border="6px solid black"
              boxSizing="border-box"
              isDisabled={!isStudent}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <Stack spacing="23px" marginBottom="1rem" direction="row">
            <Button
              loadingText="Submitting"
              colorScheme="blue"
              fontSize="1.5rem"
              onClick={()=>console.log("semester is: ",semesterIndex)}
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
