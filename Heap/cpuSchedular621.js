/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const frequency = new Map();

    for (const task of tasks) {
        frequency.set(task, (frequency.get(task) || 0) + 1);
    }

    const maxHeap = [];

    function push(value) {
        maxHeap.push(value);
        let i = maxHeap.length - 1;

        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (maxHeap[parent] >= maxHeap[i]) break;

            [maxHeap[parent], maxHeap[i]] = [maxHeap[i], maxHeap[parent]];
            i = parent;
        }
    }

    function pop() {
        if (maxHeap.length === 0) return null;

        const max = maxHeap[0];
        const last = maxHeap.pop();

        if (maxHeap.length > 0) {
            maxHeap[0] = last;
            let i = 0;

            while (true) {
                const left = 2 * i + 1;
                const right = left + 1;
                let largest = i;

                if (left < maxHeap.length && maxHeap[left] > maxHeap[largest]) {
                    largest = left;
                }
                if (right < maxHeap.length && maxHeap[right] > maxHeap[largest]) {
                    largest = right;
                }
                if (largest === i) break;

                [maxHeap[i], maxHeap[largest]] = [maxHeap[largest], maxHeap[i]];
                i = largest;
            }
        }

        return max;
    }

    for (const count of frequency.values()) {
        push(count);
    }

    let time = 0;
    const cooldown = [];

    while (maxHeap.length > 0 || cooldown.length > 0) {
        time++;

        while (
            cooldown.length > 0 &&
            cooldown[0].availableAt <= time
        ) {
            push(cooldown.shift().count);
        }

        if (maxHeap.length > 0) {la 
            const count = pop() - 1;
            if (count > 0) {
                // A task used at time t is available again at t + n + 1.
                cooldown.push({ count, availableAt: time + n + 1 });
            }
        }
    }

    return time;
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = leastInterval;
}
