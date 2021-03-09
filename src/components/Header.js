import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  HStack,
  Circle,
  Link,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Heading,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { EmailIcon } from "@chakra-ui/icons";
import { getStaticUrl } from "../utils/static-url-util";
import { getUser, isAuthenticated, getUserInitials } from "../utils/user-util";

function NavItem({ ...props }) {
  return <Box px={2} {...props} />;
}

function StyledMenuItem({ ...props }) {
  const activeAndHoverProps = {
    border: "none",
    outline: "none",
    borderColor: "purple.50",
  };
  return (
    <MenuItem
      _hover={{ ...activeAndHoverProps, backgroundColor: "purple.50" }}
      _active={activeAndHoverProps}
      _focus={activeAndHoverProps}
      color="purple.800"
      as={RouterLink}
      {...props}
    />
  );
}

function Brand({ ...props }) {
  return (
    <Box px={2} fontWeight="bold" fontSize="xl" color="purple.700" {...props} />
  );
}

function NavLink({ to, children, ...props }) {
  return (
    <Link
      color="purple.800"
      _hover={{ borderBottom: "2px solid", borderColor: "purple.800" }}
      to={to}
      fontWeight="semibold"
      _focus={{ outline: "none" }}
      as={RouterLink}
      {...props}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const authenticated = isAuthenticated();
  const userInitials = getUserInitials();

  return (
    <Flex
      position="sticky"
      top={0}
      p={4}
      zIndex={99}
      justifyContent="space-between"
      bg="purple.200"
      height="82px"
    >
      {/* Left Side */}
      <HStack>
        <Brand>
          <NavLink
            fontWeight="inherit"
            color="inherit"
            fontSize={["sm", "md", "lg"]}
            to="/"
          >
            <Flex alignItems="center">
              <span>
                <Image
                  fontSize="sm"
                  fontWeight="normal"
                  borderRadius="full"
                  boxSize="50px"
                  src={getStaticUrl("/images/school-logo.png")}
                  alt="school logo"
                  height="30px"
                  width="30px"
                />
              </span>
              <Heading as="h5" size="md" pl="3px">
                My Public School
              </Heading>
            </Flex>
          </NavLink>
        </Brand>
        {authenticated && (
          <NavItem>
            <Menu>
              <NavLink as={MenuButton}>
                <Flex alignItems="center">
                  <span>Student tool</span> <ChevronDownIcon />
                </Flex>
              </NavLink>
              <MenuList>
                <StyledMenuItem to="/assignments">Assignments</StyledMenuItem>
                <StyledMenuItem to="/scores">Scores</StyledMenuItem>
                <StyledMenuItem to="/classmates">Classmates</StyledMenuItem>
              </MenuList>
            </Menu>
          </NavItem>
        )}
        {authenticated && (
          <>
            <NavItem>
              <Menu>
                <NavLink as={MenuButton} to={""}>
                  <Flex alignItems="center">
                    <span>Clubs</span> <ChevronDownIcon />
                  </Flex>
                </NavLink>
                <MenuList>
                  <StyledMenuItem to="/clubs">Debate</StyledMenuItem>
                  <StyledMenuItem to="/clubs">Reading</StyledMenuItem>
                  <StyledMenuItem to="/clubs">Chess</StyledMenuItem>
                </MenuList>
              </Menu>
            </NavItem>
            <NavItem>
              <NavLink to={"/messages"}>{<EmailIcon />}</NavLink>
            </NavItem>
          </>
        )}
      </HStack>

      {/* Right Side */}
      <HStack className="flex justify-end">
        {authenticated ? (
          <>
            <NavItem>
              <Menu>
                <Circle
                  as={MenuButton}
                  size="50px"
                  bg="purple.50"
                  color="purple.600"
                  fontWeight="bold"
                  fontSize="lg"
                >
                  {userInitials.first}
                  {userInitials.last}
                </Circle>
                <MenuList>
                  <StyledMenuItem to="/profile">Profile</StyledMenuItem>
                  <form method="post" action="/logout">
                    <StyledMenuItem as="div">
                      <button
                        type="submit"
                        style={{
                          width: "100%",
                          height: "100%",
                          textAlign: "left",
                        }}
                      >
                        Log Out
                      </button>
                    </StyledMenuItem>
                  </form>
                </MenuList>
              </Menu>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem>
              <NavLink href="/login" as="a">
                Log In
              </NavLink>
            </NavItem>
          </>
        )}
      </HStack>
    </Flex>
  );
}
