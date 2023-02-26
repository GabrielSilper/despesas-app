const randomId = (() => {
  const hex = 16;
  const cut = 8;
  const part1 = Math.random().toString(hex).substring(cut);
  const part2 = Math.random().toString(hex).substring(cut);
  return `${part1}-${part2}`;
})();

export default randomId;
