import React, { useState, useContext, useRef } from "react";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  HStack,
  Stack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { userLoginCredentialsContext } from "../../App";

function UploadMarks() {
  const [studentName, setStudentName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [studentMarks, setStudentMarks] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessfulAndMessage,setIsSuccessfulAndMessage]=useState();
  const cancelRef = useRef();
  const userLoginCredentials = useContext(userLoginCredentialsContext);

  const onClose=() => setIsOpen(false);

  async function uploadStudentMarks(studentdetailsObject) {
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: userLoginCredentials.id,
        password: userLoginCredentials.password,
        student: studentdetailsObject.student,
      }),
    };
    try {
      const response = await fetch(
        "http://localhost:5000/teacher/uploadmarks",
        params
      );
      const responeJson = await response.json();
      console.log("response on uploading is: ", responeJson.description);
      setIsSuccessfulAndMessage({
        status:responeJson.status,
        description:responeJson.description,
      })
      setIsOpen(true);
    } catch (error) {
      console.log("error on uploading: ", error);
    }
  }

  return (
    <div className="UploadMarks flex__container">
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {isSuccessfulAndMessage?.status==200?'Successfully!':'Error!'}
            </AlertDialogHeader>
            <AlertDialogBody>
              <Alert status={isSuccessfulAndMessage?.status==200?'success':'error'}>
                <AlertIcon />
                {isSuccessfulAndMessage?.status==200?'Marks Uploaded':`Error: ${isSuccessfulAndMessage?.description}`}
              </Alert>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <div className="Form">
        <FormControl width="50%">
          <HStack spacing="24px" marginBottom="1rem">
            <FormLabel fontSize="1.5rem">Name</FormLabel>
            <Input
              type="text"
              border="6px solid black"
              boxSizing="border-box"
              value={studentName}
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
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
            ></Input>
          </HStack>
          <HStack spacing="24px" marginBottom="1rem">
            <FormLabel fontSize="1.5rem">Subject Marks</FormLabel>
            <Input
              type="number"
              border="6px solid black"
              boxSizing="border-box"
              value={studentMarks}
              onChange={(e) => setStudentMarks(e.target.value)}
            ></Input>
          </HStack>
          <Stack spacing="23px" marginBottom="1rem" direction="row">
            <Button
              loadingText="Submitting"
              colorScheme="blue"
              fontSize="1.5rem"
              onClick={() => {
                if(!studentName || !studentID || !studentMarks){
                  setIsSuccessfulAndMessage({
                    status:500,
                    description:'Please enter student/id/marks',
                  });
                  setIsOpen(true);
                  return;
                }
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
              onClick={()=>{
                setStudentName('');
                setStudentMarks('');
                setStudentID('');
              }}
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
