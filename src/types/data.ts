export type DateData = {
  [date: string]: number;
};

export type MonthData = {
  [month: string]: number;
};

export interface InitialStateData {
  data: DateData;
  loading: boolean;
  error: boolean;
}

export interface Month {
  date: string;
  alpha: number;
  value: number;
}
