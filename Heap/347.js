var topKFrequent = function (nums, k) {
  const freq = new Map();

  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  // Heap में [frequency, number] रखा है.
  // Root पर सबसे कम frequency वाला element रहता है.
  const heap = [];

  function push(item) {
    heap.push(item);
    let index = heap.length - 1;

    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (heap[parent][0] <= heap[index][0]) break;

      [heap[parent], heap[index]] = [heap[index], heap[parent]];
      index = parent;
    }
  }

  function pop() {
    const min = heap[0];
    const last = heap.pop();

    if (heap.length > 0) {
      heap[0] = last;
      let index = 0;

      while (true) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let smallest = index;

        if (left < heap.length && heap[left][0] < heap[smallest][0]) {
          smallest = left;
        }
        if (right < heap.length && heap[right][0] < heap[smallest][0]) {
          smallest = right;
        }
        if (smallest === index) break;

        [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
        index = smallest;
      }
    }

    return min;
  }

  for (const [num, count] of freq) {
    push([count, num]);
    if (heap.length > k) {
      pop();
    }
  }

  return heap.map(([, num]) => num);
};