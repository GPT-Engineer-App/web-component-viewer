// Complete the Index page component here
// Use chakra-ui
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { FaCode, FaDatabase, FaEye } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={4}>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>
            <FaCode /> DOM
          </Tab>
          <Tab>
            <FaDatabase /> Variables
          </Tab>
          <Tab>
            <FaEye /> Contents
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>DOM Viewer Component</Text>
            {/* Placeholder for DOM Viewer Component */}
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Text>This is where the DOM structure will be displayed.</Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Text>JSON Viewer Component</Text>
            {/* Placeholder for JSON Viewer Component */}
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Text>This is where the component's variables will be displayed in JSON format.</Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Text>Content Viewer Component</Text>
            {/* Placeholder for Content Viewer Component */}
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Text>This is where the rendered content of the component will be previewed.</Text>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Index;
