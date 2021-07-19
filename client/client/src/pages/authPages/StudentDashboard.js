import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
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
            {Object.entries(userLoginCredentials.body).map(
              ([subject, marks]) => {
                if (subject != "id") {
                  const pretifiedSubjects = subject.split("_");
                  return (
                    <Tr>
                      <Td>
                        {pretifiedSubjects.map(
                          (e) => e.charAt(0).toUpperCase() + e.slice(1) + " "
                        )}
                      </Td>
                      <Td>{marks ? marks : "null"}</Td>
                    </Tr>
                  );
                }
              }
            )}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}

export default StudentDashboard;
