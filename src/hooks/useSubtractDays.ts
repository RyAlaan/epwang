const useCalculatePreviousDate = (date: Date, days: number) => {
  let targetDate = new Date(date);
  let newDate = new Date(targetDate.getTime() - days * 24 * 60 * 60 * 1000);
  return newDate;
};

const useFormatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
  };
  return new Date(date).toLocaleDateString("en-US", options).toUpperCase();
};

export { useCalculatePreviousDate, useFormatDate };
