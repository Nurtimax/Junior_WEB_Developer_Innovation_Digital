import { Table, TableContainer, Paper, Box, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks/redux";
import { selectorData } from "../../store/slices/data";
import { memo } from "react";
import TableHead from "./TableHead";
import Body from "./Body";

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
      <Box pt={1} display="flex" alignItems="center" gap={0.2}>
        <Typography sx={{ fontSize: "12px" }}>Less</Typography>
        <Box
          sx={{
            width: "10px",
            height: "10px",
            borderRadius: "2px",
            border: "1px solid #2424248a",
          }}
        />
        <Box
          sx={{
            width: "10px",
            height: "10px",
            background: "#0e4429",
            borderRadius: "2px",
          }}
        />
        <Box
          sx={{
            width: "10px",
            height: "10px",
            background: "#006d32",
            borderRadius: "2px",
          }}
        />
        <Box
          sx={{
            width: "10px",
            height: "10px",
            background: "#26a641",
            borderRadius: "2px",
          }}
        />
        <Box
          sx={{
            width: "10px",
            height: "10px",
            background: "#39d353",
            borderRadius: "2px",
          }}
        />
        <Typography sx={{ fontSize: "12px" }}>More</Typography>
      </Box>
    </TableContainer>
  );
});

export default DataTable;
