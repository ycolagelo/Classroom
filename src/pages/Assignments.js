import { Box, Table, Thead, Th, Tr, Tbody, Td } from "@chakra-ui/react";
import React from "react";

export function Assignments() {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Subject</Th>
          <Th>Status</Th>
          <Th>Grade</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Math:"Link"</Td>
          <Td>Pending</Td>
          <Td>0</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
