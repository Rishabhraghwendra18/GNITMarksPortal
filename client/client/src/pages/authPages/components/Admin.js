import React, { useRef, useEffect } from "react";
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

function AdminDashboard() {
  const student = useRef(null);

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
            >
              Students
            </Button>
            <Button
              colorScheme="blue"
              variant="outline"
              isFullWidth
              _focus={{ color: "white", bg: "#265FAE" }}
            >
              Teachers
            </Button>
          </Stack>
        </div>
        <div className="data">
          <Tabs variant="enclosed">
            <TabList>
              {tabLists.map((e) => (
                <Tab _selected={{ color: "white", bg: "#265FAE" }}>{e}</Tab>
              ))}
            </TabList>
            <TabPanels>
              {tabLists.map(() => (
                <TabPanel>
                  <DataShowingTable />
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
