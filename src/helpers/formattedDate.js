const formattedDate = (date) => {
  const numFormat = { date: 10, month: 8 };
  const dd = date.getDate() > numFormat.date ? date.getDate() : `0${date.getDate()}`;
  const mm = date.getMonth() > numFormat.month
    ? date.getMonth() + 1
    : `0${date.getMonth() + 1}`;
  const yy = date.getFullYear();

  return `${dd}/${mm}/${yy}`;
};

export default formattedDate;
