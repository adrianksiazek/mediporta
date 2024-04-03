import { useTagsTable } from "./tags.effect";
import CountInput from "../count-input/count-input";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OrderInput from "../order-input/order-input";
import SortInput from "../sort-input/sort-input";

export default function TagsTable() {
  const { data, isLoading, error, isError } = useTagsTable();

  if (isLoading) {
    return <h2 className="loading">Loading</h2>;
  }

  if (isError) {
    return <h2>{error?.message}</h2>;
  }

  return (
    <div className="tags-container">
      <div className="form-control-group">
        <CountInput />
        <OrderInput />
        <SortInput />
      </div>
      {data && (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Count</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.items.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
}
