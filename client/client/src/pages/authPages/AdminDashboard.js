import React from "react";
import { Link, Route } from "react-router-dom";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Stack,
} from "@chakra-ui/react";
import DataShowingTable from "./components/DataShowingTable";

function AdminDashboard() {
  return (
    <div className="AdminDashboard flex__container">
      <Link to="/accountsignup">
        <button className="uploadButton">Create Account</button>
      </Link>
      <div className="dashboard">
        <div className="teacher__student">
          <Stack spacing={4} direction="column" align="center">
            <Button
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
          <Tabs variant="enclosed" >
            <TabList>
              <Tab _selected={{ color: "white", bg: "#265FAE" }}>Tab 1</Tab>
              <Tab _selected={{ color: "white", bg: "#265FAE" }}>Tab 2</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <DataShowingTable/>
              </TabPanel>
              <TabPanel>
              <DataShowingTable/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
