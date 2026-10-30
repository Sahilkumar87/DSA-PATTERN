/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 
 

    
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
class Solution {
    kthSmallest(arr, k) {
        // Code here
        let pq = new MaxHeap();
        
        for(let i = 0; i<k; i++)
            pq.push(arr[i]);
            for(let i = k; i<arr.length; i++){
                if(arr[i]>= pq.peek())
                continue;
                pq.pop();
                pq.push(arr[i]);
            }
            return pq.peek();
    }
}