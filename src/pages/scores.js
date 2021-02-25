import { Table, Thead, Th, Tr, Tbody, Td } from "@chakra-ui/react";
import React from "react";

export function Scores() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th> Subject</Th>
          <Th>Score</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Math</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>English</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>Art</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>Science</Td>
          <Td>0</Td>
        </Tr>
        <Tr>
          <Td>Music</Td>
          <Td>0</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
