import { Table, TableContainer, Paper } from "@mui/material";
import { useAppSelector } from "../../hooks/redux";
import { selectorData } from "../../store/slices/data";
import { memo } from "react";
import TableHead from "./TableHead";
import Body from "./Body";
import { GithubGraphCard } from "../UI";

const DataTable = memo(() => {
  const { data, loading } = useAppSelector((state) => selectorData(state));

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!Object.keys(data).length) {
    return <h1>No Items</h1>;
  }

  return (
    <TableContainer
      sx={{ pt: 3, px: 1, pb: 1, border: "1px solid" }}
      component={Paper}
    >
      <Table color="inherit">
        <TableHead />
        <Body />
      </Table>
      <GithubGraphCard
        list={[
          { color: "#b6b9b7", id: 1 },
          { color: "#0e4429", id: 2 },
          { color: "#006d32", id: 3 },
          { color: "#26a641", id: 4 },
          { color: "#39d353", id: 5 },
        ]}
      />
    </TableContainer>
  );
});

export default DataTable;
