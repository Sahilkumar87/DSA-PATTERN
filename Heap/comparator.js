const cmp = (a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];   // first ko ascending order me
  return a[1].localeCompare(b[1]);          // agar first same ho to second ascending
};

const items = [
  [5, "z"],
  [2, "a"],
  [2, "c"],
  [1, "b"]
];

items.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  return a[1].localeCompare(b[1]);
});

console.log(items);

