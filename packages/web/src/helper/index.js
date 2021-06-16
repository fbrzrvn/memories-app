export const formatPostDate = (date) => {
  const months = [
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
    "Nov",
    "Dec",
  ];
  const monthIndex = date.slice(6, 7) - 1;
  const month = months[monthIndex];
  const day = date.slice(8, 10);
  const year = date.slice(0, 4);
  return `${month} ${day}, ${year}`;
};

export const countReadingTime = (title, content) => {
  const totalWords = title.length + content.length;
  const readingTime = totalWords / 200;
  return readingTime.toFixed();
};
