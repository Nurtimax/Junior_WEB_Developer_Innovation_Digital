import { TableBody, TableCell, TableRow, Tooltip } from "@mui/material";
import { createCalendarGrid, chartBackground } from "../../helpers/date";
import { useAppSelector } from "../../hooks/redux";
import { selectorData } from "../../store/slices/data";

const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const Body = () => {
  const { data } = useAppSelector((state) => selectorData(state));

  const array = createCalendarGrid(data);

  console.log(array);

  return (
    <TableBody sx={{ border: "none" }}>
      {array.map((el, i) => (
        <TableRow>
          <TableCell
            align="center"
            padding="none"
            sx={{
              padding: 0,
              borderRadius: "5px",
              height: "10px",
              width: "15px",
              maxHeight: "10px",
              maxWidth: "10px",
              lineHeight: 0.8,
              border: "none",
              fontSize: "10px",
            }}
          >
            {daysOfWeek[i % 2 === 0 ? i : -1]}
          </TableCell>
          {el.map((sub) => (
            <Tooltip
              title={sub.date}
              placement="top"
              arrow
              disableInteractive
              describeChild={false}
            >
              <TableCell
                align="center"
                padding="none"
                sx={{
                  border: "1px solid white",
                  height: "10px",
                  width: "10px",
                  maxHeight: "10px",
                  maxWidth: "10px",
                  padding: 0,
                  borderRadius: "3px",
                  lineHeight: "1",

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
