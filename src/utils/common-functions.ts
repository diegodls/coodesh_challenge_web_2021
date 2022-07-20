export function formatDate(date: string): string {
  let tempDate: Date = new Date(date);

  let stringDay: string =
    tempDate.getDate() < 10
      ? `0${tempDate.getDate()}`
      : `${tempDate.getDate()}`;

  let stringMonth: string =
    tempDate.getMonth() + 1 < 10
      ? `0${tempDate.getMonth() + 1}`
      : `${tempDate.getMonth() + 1}`;

  let stringYear: string = String(tempDate.getFullYear());

  return `${stringDay}/${stringMonth}/${stringYear}`;
}
