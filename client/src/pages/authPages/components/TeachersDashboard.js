import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { userLoginCredentialsContext } from "../../App";

function TeachersDashboard() {
  const userLoginCredentials = useContext(userLoginCredentialsContext);
  return (
    <div className="TeachersDashboard flex__container">
      <Link to={"/teacher/uploadmarks"}>
        <button className="uploadButton">Upload Marks</button>
      </Link>
      <div className="dashboard">
        <div className="teacherInformation">
          <p>{userLoginCredentials.body.id}</p>
        </div>
        <div className="teachersStudentMarks">
          <Table variant="simple" colorScheme="black" size="lg">
            <Thead>
              <Tr>
                <Th>Student ID</Th>
                <Th>Student Name</Th>
                <Th>Student Branch</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userLoginCredentials.body.map((e) => {
                const studentList = [];
                for (const property in e) {
                  studentList.push(
                        <Td>{e[property]}</Td>
                  )
                }
                return(
                      <Tr>
                            {studentList.map(e=>e)}
                      </Tr>
                )
              })}
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default TeachersDashboard;
