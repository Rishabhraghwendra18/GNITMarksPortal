import React, { useState, useContext, useRef } from "react";
import { semestersAndSubjects, branches } from "./dataForPages";
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
import { userLoginCredentialsContext } from "../App";

function AccountSignUp() {
  const [isStudent, setIsStudent] = useState(null);
  const [semesterIndex, setSemesterIndex] = useState();
  const [userName, setUserName] = useState(null);
  const [userID, setUserId] = useState(null);
  const [userSemester, setUserSemester] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [userBranchOrSubject, setUserBranchOrSubject] = useState(null);
  const [isChecked, setIsChecked] = useState([false, false]);
  const subjectRef=useRef();
  const branchRef=useRef();
  const dropDowns = [subjectRef,branchRef];
  const allUserInputFieldsValues = [
    userName,
    userID,
    userSemester,
    userBranchOrSubject,
    userPassword,
  ];
  const allUserInputFieldStateHooks = [
    setUserName,
    setUserId,
    setUserSemester,
    setUserPassword,
    setUserBranchOrSubject,
  ];
  const userLoginCredentials = useContext(userLoginCredentialsContext);

  async function createUserAccount(userObject) {
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: userLoginCredentials.id,
        password: userLoginCredentials.password,
        user: userObject,
      }),
    };
    try {
      const response = await fetch(
        "/admin/adduser",
        params
      );
      const responeJson = await response.json();
      console.log("response on creating account: ", responeJson);
    } catch (error) {
      alert("Something went wrong");
      console.log("error in creating account: ", error);
    }
  }
  return (
    <div className="AccountSignUp flex__container">
      <div className="Form">
        <FormControl width="50%">
          <HStack spacing="45px" marginBottom="1rem">
            <FormLabel fontSize="1.5rem" boxSizing="border-box">
              ID
            </FormLabel>
            <Input
              type="text"
              border="6px solid black"
              boxSizing="border-box"
              value={userID}
              onChange={(e) => setUserId(e.target.value)}
            ></Input>
          </HStack>
          <HStack spacing="24px" marginBottom="1rem">
            <FormLabel fontSize="1.5rem">Name</FormLabel>
            <Input
              type="text"
              border="6px solid black"
              boxSizing="border-box"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></Input>
          </HStack>
          <HStack spacing="45px" marginBottom="1rem">
            <FormLabel fontSize="1.5rem" boxSizing="border-box">
              User Password
            </FormLabel>
            <Input
              type="text"
              border="6px solid black"
              boxSizing="border-box"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
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
              onChange={(e) => {
                setSemesterIndex(e.target.value);
                setUserSemester(semestersAndSubjects[e.target.value]?.semester);
              }}
            >
              {semestersAndSubjects.map((e, index) => (
                <option key={index} value={index}>
                  {e.semester}
                </option>
              ))}
            </Select>
          </HStack>
          <FormLabel fontSize="1.7rem">Role:</FormLabel>
          <Stack
            spacing="23px"
            marginBottom="1rem"
            direction="column"
            padding="1rem"
          >
            <Checkbox
              size="lg"
              isChecked={isChecked[0]}
              onChange={() => {
                setIsStudent(true);
                setIsChecked([true, false]);
              }}
            >
              Student
            </Checkbox>
            <Checkbox
              size="lg"
              isChecked={isChecked[1]}
              onChange={() => {
                setIsStudent(false);
                setIsChecked([false, true]);
              }}
            >
              Teacher
            </Checkbox>
          </Stack>
          <Stack spacing="23px" marginBottom="1rem" direction="row">
            <FormLabel fontSize="1.5rem" boxSizing="border-box">
              Subject
            </FormLabel>
            <Select
              ref={subjectRef}
              placeholder="Select Subject"
              size="lg"
              border="6px solid black"
              boxSizing="border-box"
              isDisabled={isStudent}
              onChange={(e) =>
                setUserBranchOrSubject(["subject", e.target.value])
              }
            >
              {semestersAndSubjects[semesterIndex]?.subjects.map((e, index) => (
                <option key={index} value={e}>
                  {e}
                </option>
              ))}
            </Select>
          </Stack>
          <HStack spacing="45px" marginBottom="1rem">
            <FormLabel fontSize="1.5rem" boxSizing="border-box">
              Branch
            </FormLabel>
            <Select
              ref={branchRef}
              placeholder="Select Branch"
              size="lg"
              border="6px solid black"
              boxSizing="border-box"
              isDisabled={!isStudent}
              onChange={(e) =>
                setUserBranchOrSubject(["branch", e.target.value])
              }
            >
              {branches.map((e, index) => (
                <option key={index} value={e}>
                  {e}
                </option>
              ))}
            </Select>
          </HStack>
          <Stack spacing="23px" marginBottom="1rem" direction="row">
            <Button
              loadingText="Submitting"
              colorScheme="blue"
              fontSize="1.5rem"
              onClick={() => {
                if (
                  allUserInputFieldsValues.filter((e) => !e || e === "").length
                ) {
                  alert("Please fill all the fields");
                  return;
                }
                const userObject = {
                  id: userID,
                  name: userName,
                  [userBranchOrSubject[0]]: userBranchOrSubject[1],
                  role: isStudent ? "student" : "teacher",
                  password: userPassword,
                  [userSemester]: true,
                };
                createUserAccount(userObject);
                console.log("userobject: ", userObject);
              }}
            >
              Create Account
            </Button>
            <Button
              loadingText="Submitting"
              colorScheme="red"
              fontSize="1.5rem"
              onClick={() => {
                allUserInputFieldStateHooks.map((e) => e(""));
                setIsChecked([false, false]);
                dropDowns.map(e=>e.current.options.selectedIndex = 0)
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

export default AccountSignUp;
