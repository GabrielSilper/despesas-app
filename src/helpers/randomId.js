const randomId = (() => {
  const part1 = Math.random().toString(16).substring(8);
  const part2 = Math.random().toString(16).substring(8);
  return `${part1}-${part2}`;
})();

export default randomId;
