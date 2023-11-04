import { TableBody, TableCell, TableRow, Tooltip, styled } from "@mui/material";
import { createCalendarGrid, chartBackground } from "../../helpers/date";
import { useAppSelector } from "../../hooks/redux";
import { selectorData } from "../../store/slices/data";

const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const StyledTableCell = styled(TableCell)`
  padding: 0;
  border-radius: 2px;
  height: 10px;
  width: 15px;
  line-height: 0.8;
  border: none;
  font-size: 10px;
`;

const Body = () => {
  const { data } = useAppSelector((state) => selectorData(state));

  const array = createCalendarGrid(data);

  return (
    <TableBody>
      {array.map((el, i) => (
        <TableRow>
          <StyledTableCell align="center">
            {daysOfWeek[i % 2 === 0 ? i : -1]}
          </StyledTableCell>
          {el.map((sub) => (
            <Tooltip
              title={sub.date}
              placement="top"
              arrow
              disableInteractive
              describeChild={false}
            >
              <StyledTableCell
                align="center"
                padding="none"
                sx={{
                  width: "10px",
                  ...chartBackground(sub.value, sub.alpha),
                }}
              />
            </Tooltip>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default Body;
