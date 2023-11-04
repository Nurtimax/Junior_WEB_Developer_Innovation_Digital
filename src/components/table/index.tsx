import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../../hooks/redux";
import { selectorData } from "../../store/slices/data";
import { createCalendarGrid, chartBackground } from "../../helpers/date";

function WeeklyDataTable() {
  const { data } = useAppSelector((state) => selectorData(state));

  // Create an array of day names for the table header
  const daysOfMonth = [
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "",
  ];

  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const array = createCalendarGrid(data);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            {daysOfMonth.map((day) => (
              <TableCell colSpan={4} key={day}>
                {day}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map((el, i) => (
            <TableRow>
              <TableCell
                align="center"
                sx={{ padding: 0, borderRadius: "5px" }}
              >
                {daysOfWeek[i]}
              </TableCell>
              {el.map((sub) => (
                <TableCell
                  align="center"
                  sx={{
                    border: "1px solid white",
                    height: "20px",
                    width: "20px",
                    padding: 0,
                    borderRadius: "5px",
                    ...chartBackground(sub.value, sub.alpha),
                  }}
                >
                  <Tooltip title={sub.date} placement="top" arrow>
                    <Typography>{sub.value}</Typography>
                  </Tooltip>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WeeklyDataTable;
