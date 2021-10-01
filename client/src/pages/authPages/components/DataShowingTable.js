import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

function DataShowingTable({ data }) {
  return (
    <div>
      <Table colorScheme="black" size="lg">
        <Thead>
          <Tr>
            {data?.tableHeader.map((e, index) => (
              <Th key={index}>{e}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data?.type.map((e, index) =>
            data?.tableHeader.length === 3 ? (
              <Tr key={index}>
                <Td>{e.name}</Td>
                <Td>{e.branch}</Td>
                <Td>{e.total}</Td>
              </Tr>
            ) : (
              <Tr>
                <Td>{e.name}</Td>
                <Td>{e.subject}</Td>
              </Tr>
            )
          )}
        </Tbody>
      </Table>
    </div>
  );
}

export default DataShowingTable;
