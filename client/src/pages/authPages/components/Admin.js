import React, { useRef, useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Stack,
} from "@chakra-ui/react";
import DataShowingTable from "./DataShowingTable";
import { userLoginCredentialsContext } from "../../App";

function AdminDashboard() {
  const student = useRef(null);
  const [semester, setSemester] = useState("sem1");
  const [tableHeader, setTableHeader] = useState([
    "Students Name",
    "Branch",
    "Marks",
  ]);
  const [dataObject, setDataObject] = useState();
  const userLoginCredentials = useContext(userLoginCredentialsContext);
  const tabLists = [
    "sem1",
    "sem2",
    "sem3",
    "sem4",
    "sem5",
    "sem6",
    "sem7",
    "sem8",
  ];
  async function fetchRecords() {
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: userLoginCredentials.id,
        password: userLoginCredentials.password,
      }),
    };
    try {
      console.log("params is: ", params);
      const response = await fetch(
        `http://localhost:5000/admin/dashboard?semester=${semester}`,
        params
      );
      const responeJson = await response.json();
      return Promise.resolve(responeJson);
    } catch (error) {
      console.log("error in admin: ", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const responseJson = await fetchRecords();
      console.log("before setting dataObject: ", tableHeader);
      if (tableHeader[0] === "Students Name")
        setDataObject({ tableHeader, type: responseJson.students });
      else setDataObject({ tableHeader, type: responseJson.teachers });
    }
    fetchData();
  }, [semester, tableHeader]); 
  useEffect(() => {
    student.current.focus();
  }, []);
  return (
    <div className="AdminDashboard flex__container">
      <Link to="/accountsignup">
        <button className="uploadButton">Create Account</button>
      </Link>
      <div className="dashboard">
        <div className="teacher__student">
          <Stack spacing={4} direction="column" align="center">
            <Button
              ref={student}
              colorScheme="blue"
              variant="outline"
              isFullWidth
              _focus={{ color: "white", bg: "#265FAE" }}
              onClick={() =>
                setTableHeader(["Students Name", "Branch", "Marks"])
              }
            >
              Students
            </Button>
            <Button
              colorScheme="blue"
              variant="outline"
              isFullWidth
              _focus={{ color: "white", bg: "#265FAE" }}
              onClick={() => setTableHeader(["Teachers Name", "Subject"])}
            >
              Teachers
            </Button>
          </Stack>
        </div>
        <div className="data">
          <Tabs variant="enclosed">
            <TabList>
              {tabLists.map((e, index) => (
                <Tab
                  key={index}
                  _selected={{ color: "white", bg: "#265FAE" }}
                  onClick={(e) => {
                    setSemester(e.target.innerHTML);
                  }}
                >
                  {e}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {tabLists.map(() => (
                <TabPanel>
                  <DataShowingTable data={dataObject} />
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
