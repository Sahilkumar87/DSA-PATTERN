
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    peek() {
        return this.heap[0];
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] >= this.heap[index]) break; // Changed to >=
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        
        while (true) {
            let leftChild = this.getLeftChildIndex(index);
            let rightChild = this.getRightChildIndex(index);
            let largest = index;

            if (leftChild < length && this.heap[leftChild] > this.heap[largest]) {
                largest = leftChild;
            }
            if (rightChild < length && this.heap[rightChild] > this.heap[largest]) {
                largest = rightChild;
            }
            if (largest === index) break;
            
            this.swap(index, largest);
            index = largest;
        }
    }

    size() {
        return this.heap.length;
    }
}
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Helper functions
    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert new element
    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    // Remove and return minimum element
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    // Peek at minimum element
    peek() {
        return this.heap[0];
    }

    // Move element up to maintain heap property
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    // Move element down to maintain heap property
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        
        while (true) {
            let leftChild = this.getLeftChildIndex(index);
            let rightChild = this.getRightChildIndex(index);
            let smallest = index;

            if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }
            if (smallest === index) break;
            
            this.swap(index, smallest);
            index = smallest;
        }
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}
// Min-Heap Example
const minHeap = new MinHeap();
minHeap.push(5);
minHeap.push(3);
minHeap.push(8);
minHeap.push(1);

console.log(minHeap.peek()); // 1 (minimum)
console.log(minHeap.pop());  // 1
console.log(minHeap.pop());  // 3
console.log(minHeap.peek()); // 5 (new minimum)

// Max-Heap Example
const maxHeap = new MaxHeap();
maxHeap.push(5);
maxHeap.push(3);
maxHeap.push(8);
maxHeap.push(1);

console.log(maxHeap.peek()); // 8 (maximum)
console.log(maxHeap.pop());  // 8
console.log(maxHeap.pop());  // 5