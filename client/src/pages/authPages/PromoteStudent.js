import React, { useState, useContext, useRef } from "react";
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

function PromoteStudent() {
  const [userID, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const allUserInputFieldStateHooks = [setUserId, setUserName];
  const allUserInputFieldsValues = [userID, userName];
  const userLoginCredentials = useContext(userLoginCredentialsContext);
  async function promoteStudent(userObject) {
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
      const response = await fetch("/admin/promotestudent", params);
      const responeJson = await response.json();
      console.log("response on promoting: ", responeJson);
    } catch (error) {
          console.log("error in promoting: ",error);
    }
  }
  return (
    <div className="PromoteStudent">
     <FormControl width="30%">
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
        </FormControl>
      <Stack spacing="23px" marginBottom="1rem" direction="row">
        <Button
          loadingText="Submitting"
          colorScheme="blue"
          fontSize="1.5rem"
          onClick={() => {
            if (allUserInputFieldsValues.filter((e) => !e || e === "").length) {
              alert("Please fill all the fields");
              return;
            }
            const userObject = {
              id: userID,
              name: userName,
            };
            promoteStudent(userObject);
            console.log("userobject: ", userObject);
          }}
        >
          Promote Student
        </Button>
        <Button
          loadingText="Submitting"
          colorScheme="red"
          fontSize="1.5rem"
          onClick={() => {
            allUserInputFieldStateHooks.map((e) => e(""));
          }}
        >
          Cancel
        </Button>
      </Stack>
    </div>
  );
}

export default PromoteStudent;
