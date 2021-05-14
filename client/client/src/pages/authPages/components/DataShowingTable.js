import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

function DataShowingTable() {
  return (
    <div>
      <Table colorScheme="black" size="lg">
        <Thead>
          <Tr>
            <Th>Student Name</Th>
            <Th>Subject1 Marks</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>ABC</Td>
            <Td>55</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>0.91444</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
}

export default DataShowingTable;
