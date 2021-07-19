import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { userLoginCredentialsContext } from "../App";

function StudentDashboard() {
  const userLoginCredentials = useContext(userLoginCredentialsContext);
  const userMarksInHTMLTag = [];
  useEffect(() => {
    console.log("hi:", userLoginCredentials);
  }, []);
  return (
    <div className="StudentDashBoard flex__container">
      <div className="StudentDashBoard__marksDiv">
        <div className="studentDetailsAndSemesters">
          <div>
            <p>ID: {userLoginCredentials.body.id}</p>
          </div>
        </div>
        <div className="verticalLine"></div>
        <Table variant="simple" colorScheme="black" size="lg">
          <TableCaption>nulls: marks has not been uploaded</TableCaption>
          <Thead>
            <Tr>
              <Th>subject</Th>
              <Th>Marks</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.entries(userLoginCredentials.body).map((e) => {
              if (e[0] != "id") {
                const subjects=e[0].split('_');
                console.log("arrays: ",e)
                return (
                  <Tr>
                    <Td>{subjects.map(e=>e.charAt(0).toUpperCase()+e.slice(1)+' ')}</Td>
                    <Td>{e[1]?e[1]:"null"}</Td>
                  </Tr>
                );
              }
            })}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}

export default StudentDashboard;
