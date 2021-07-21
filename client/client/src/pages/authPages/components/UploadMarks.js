import React, { useState,useContext } from "react";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  HStack,
  Stack,
} from "@chakra-ui/react";
import {userLoginCredentialsContext}from "../../App";

function UploadMarks() {
  const [studentName, setStudentName] = useState();
  const [studentID, setStudentID] = useState();
  const [studentMarks, setStudentMarks] = useState();
  const userLoginCredentials = useContext(userLoginCredentialsContext);
  async function uploadStudentMarks(studentdetailsObject) {
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({id:userLoginCredentials.id,password:userLoginCredentials.password,student:studentdetailsObject.student}),
    };
    try {
      const response = await fetch(
        "http://localhost:5000/teacher/uploadmarks",
        params
      );
      const responeJson = await response.json();
      console.log("response on uploading is: ", responeJson);
    } catch (error) {
      console.log("error on uploading: ", error);
    }
  }
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
              onChange={(e) => setStudentName(e.target.value)}
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
              onChange={(e) => setStudentID(e.target.value)}
            ></Input>
          </HStack>
          <HStack spacing="24px" marginBottom="1rem">
            <FormLabel fontSize="1.5rem">Subject Marks</FormLabel>
            <Input
              type="number"
              border="6px solid black"
              boxSizing="border-box"
              onChange={(e) => setStudentMarks(e.target.value)}
            ></Input>
          </HStack>
          <Stack spacing="23px" marginBottom="1rem" direction="row">
            <Button
              loadingText="Submitting"
              colorScheme="blue"
              fontSize="1.5rem"
              onClick={() => {
                const marksObject = {
                  student: {
                    name: studentName,
                    id: studentID,
                    marks: studentMarks,
                  },
                };
                uploadStudentMarks(marksObject);
              }}
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
