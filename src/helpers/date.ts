import { DateData, Month } from "../types/data";

export const createCalendarGrid = (date: DateData): Month[][] => {
  const arrayWeek = [[], [], [], [], [], [], []];

  const newDate = fillMissingDates(date);

  const maxObject = newDate.map((el) => el.value);

  const getMax = Math.max(...maxObject);

  const array = newDate.reduce((acc, curr) => {
    const day = new Date(curr.date).getDay();
    const alpha = curr.value / getMax;

    acc[day === 0 ? 6 : day - 1]?.push({ ...curr, alpha } as never);

    return acc;
  }, arrayWeek);

  return array;
};

export function fillMissingDates(dataArray: DateData) {
  const startDate = new Date("2022-10-26");
  const endDate = new Date("2023-10-25");
  const filledData = [];

  const array = Object.keys(dataArray).map((el) => ({
    date: el,
    value: dataArray[el],
  }));

  for (
    let date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const dateString = date.toISOString().split("T")[0]; // Преобразование в строку формата "YYYY-MM-DD"

    const existingData = array.find((item) => item.date === dateString);
    if (existingData) {
      filledData.push(existingData);
    } else {
      filledData.push({ date: dateString, value: 0 }); // Заполнение отсутствующей даты нулевым значением
    }
  }

  return filledData;
}

export const chartBackground = (value: number, alpha: number) => {
  // Ensure value is a number between 0 and maxValue
  const numericValue = parseFloat(String(value));
  if (isNaN(numericValue) || numericValue <= 0) {
    return { background: "#f5f5f5" }; // Default color
  }

  return {
    background: `rgba(2, 170, 86, ${1 - alpha})`,
  };
};
