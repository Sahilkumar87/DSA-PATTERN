class Solution {
    mergeKArrays(arr, K) {
        const heap = [];
        const result = [];

        const push = (item) => {
            heap.push(item);
            let i = heap.length - 1;

            while (i > 0) {
                const parent = Math.floor((i - 1) / 2);
                if (heap[parent].value <= heap[i].value) break;
                [heap[parent], heap[i]] = [heap[i], heap[parent]];
                i = parent;
            }
        };

        const pop = () => {
            const min = heap[0];
            const last = heap.pop();

            if (heap.length > 0) {
                heap[0] = last;
                let i = 0;

                while (true) {
                    const left = 2 * i + 1;
                    const right = left + 1;
                    let smallest = i;

                    if (left < heap.length && heap[left].value < heap[smallest].value) {
                        smallest = left;
                    }
                    if (right < heap.length && heap[right].value < heap[smallest].value) {
                        smallest = right;
                    }
                    if (smallest === i) break;

                    [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                    i = smallest;
                }
            }

            return min;
        };

        for (let row = 0; row < K; row++) {
            if (arr[row] && arr[row].length > 0) {
                push({ value: arr[row][0], row, col: 0 });
            }
        }

        while (heap.length > 0) {
            const { value, row, col } = pop();
            result.push(value);

            const nextCol = col + 1;
            if (nextCol < arr[row].length) {
                push({ value: arr[row][nextCol], row, col: nextCol });
            }
        }

        return result;
    }
}