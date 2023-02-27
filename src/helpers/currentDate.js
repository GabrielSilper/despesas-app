const currentDate = () => {
  const newDate = Date.now();
  const today = new Date(newDate);

  const numFormat = { dayRequired: 10, monthRequired: 8 };

  const dd = today.getDate() > numFormat.dayRequired
    ? today.getDate()
    : `0${today.getDate()}`;
  const mm = today.getMonth() > numFormat.monthRequired
    ? today.getMonth() + 1
    : `0${today.getMonth() + 1}`;
  const yy = today.getFullYear();

  return `${yy}-${mm}-${dd}`;
};

export default currentDate;
