/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
  const freq = new Map();

  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  // Max heap: har item { char, count }
  const heap = [];

  function push(item) {
    heap.push(item);
    let i = heap.length - 1;

    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (heap[parent].count >= heap[i].count) break;

      [heap[parent], heap[i]] = [heap[i], heap[parent]];
      i = parent;
    }
  }

  function pop() {
    if (heap.length === 0) return null;

    const top = heap[0];
    const last = heap.pop();

    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;

      while (true) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let largest = i;

        if (
          left < heap.length &&
          heap[left].count > heap[largest].count
        ) {
          largest = left;
        }

        if (
          right < heap.length &&
          heap[right].count > heap[largest].count
        ) {
          largest = right;
        }

        if (largest === i) break;

        [heap[i], heap[largest]] = [heap[largest], heap[i]];
        i = largest;
      }
    }

    return top;
  }

  for (const [char, count] of freq) {
    push({ char, count });
  }

  let result = "";

  while (heap.length >= 2) {
    const first = pop();
    const second = pop();

    result += first.char + second.char;

    if (--first.count > 0) push(first);
    if (--second.count > 0) push(second);
  }

  // Ek character bacha ho to woh sirf ek baar ho sakta hai.
  if (heap.length === 1) {
    const last = pop();

    if (last.count > 1) return "";
    result += last.char;
  }

  return result;
};