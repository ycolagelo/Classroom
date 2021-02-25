import { Container, SimpleGrid, Image, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";

import { Home } from "./pages/Home";
import { Messages } from "./pages/Messages";
import { Clubs } from "./pages/Clubs";
import { Assignments } from "./pages/Assignments";
import { Scores } from "./pages/scores";
import { Classmates } from "./pages/Classmates";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";

const isAuthenticated = true;

function App() {
  return (
    <Box color="gray.900" fontFamily="body" fontSize="md">
      <Router>
        <Header isAuthenticated={isAuthenticated} user="Mary" />
        {/* maxWidth="1400px" */}
        <Box p={4}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/messages">
              <Messages />
            </Route>
            <Route path="/clubs">
              <Clubs />
            </Route>
            <Route path="/assignments">
              <Assignments />
            </Route>
            <Route path="/scores">
              <Scores />
            </Route>
            <Route path="/classmates">
              <Classmates />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="login">
              <Login />
            </Route>
            {/* 
              This one will show if there is no above match (i.e. route not found) 
              It should always be the last one
            */}
            <Route path="/">No page found</Route>
          </Switch>
        </Box>
      </Router>
    </Box>
  );
}

export default App;

/* <Stack
        direction={{ base: "column", sm: "row" }}
        spacing={4}
        mt={4}
        ml={4}
      >
        <Button>Hey</Button>
        <Button variant="outline" size="md">
          Hey
        </Button>
        <Menu>
          <MenuButton as={Button}>Actions</MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Text fontSize="2xl">Hey</Text>
        <Link>Hey</Link>
        <Checkbox>Hey</Checkbox>
      </Stack> */
