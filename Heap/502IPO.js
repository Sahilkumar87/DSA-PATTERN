
//     class MaxHeap {
//     constructor() {
//         this.data = [];
//     }

//     push(value) {
//         const a = this.data;
//         a.push(value);

//         let i = a.length - 1;
//         while (i > 0) {
//             const parent = Math.floor((i - 1) / 2);
//             if (a[parent] >= a[i]) break;

//             [a[parent], a[i]] = [a[i], a[parent]];
//             i = parent;
//         }
//     }

//     peek() {
//         return this.data[0];
//     }

//     pop() {
//         const a = this.data;
//         const max = a[0];
//         const last = a.pop();

//         if (a.length > 0) {
//             a[0] = last;
//             let i = 0;

//             while (true) {
//                 const left = 2 * i + 1;
//                 const right = left + 1;
//                 let largest = i;

//                 if (left < a.length && a[left] > a[largest]) largest = left;
//                 if (right < a.length && a[right] > a[largest]) largest = right;
//                 if (largest === i) break;

//                 [a[i], a[largest]] = [a[largest], a[i]];
//                 i = largest;
//             }
//         }

//         return max;
//     }

//     isEmpty() {
//         return this.data.length === 0;
//     }
// }
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */

var findMaximizedCapital = function(k, w, profits, capital) {
    const projects = profits.map((profit, i) => ({
        capital: capital[i],
        profit
    }));

    projects.sort((a, b) => a.capital - b.capital);

    const maxHeap = new MaxHeap();
    let idx = 0;

    while (k > 0) {
        while (idx < projects.length && projects[idx].capital <= w) {
            maxHeap.push(projects[idx].profit);
            idx++;
        }

        if (maxHeap.isEmpty()) break;

        w += maxHeap.pop();
        k--;
    }

    return w;
};
