# DSA-PATTERN

# 🎯 DSA Patterns - Complete Guide with Real-Life Examples

Welcome to my DSA Patterns repository! Yahan maine sabhi important coding patterns ko unke concepts aur real-life examples ke saath organize kiya hai.

## 📚 Table of Contents

1. [Sliding Window](#1-sliding-window)
2. [Two Pointers](#2-two-pointers)
3. [Fast & Slow Pointers](#3-fast--slow-pointers)
4. [Merge Intervals](#4-merge-intervals)
5. [Cyclic Sort](#5-cyclic-sort)
6. [In-place Reversal of LinkedList](#6-in-place-reversal-of-linkedlist)
7. [Tree BFS](#7-tree-bfs)
8. [Tree DFS](#8-tree-dfs)
9. [Two Heaps](#9-two-heaps)
10. [Subsets](#10-subsets)
11. [Modified Binary Search](#11-modified-binary-search)
12. [Top K Elements](#12-top-k-elements)
13. [K-way Merge](#13-k-way-merge)
14. [0/1 Knapsack (DP)](#14-01-knapsack-dp)
15. [Topological Sort](#15-topological-sort)

---

## 1. Sliding Window

### 🎯 Concept
Ek fixed ya variable size ki "window" ko array/string par slide karte hain taaki contiguous subarray/substring ke problems solve ho sakein.

### 🌍 Real-Life Example
**Train ke dibbe mein se passengers dekhna:**
Maan lo aap train ke bahar khade hain aur aapko 5 consecutive dibbon mein total passengers count karne hain. Pehle aap dibbe 1-5 count karte hain, fir window slide karke dibbe 2-6 count karte hain (dibba 1 hatao, dibba 6 add karo). Har baar puri train count nahi karni padti!

### ✅ When to Use
- Maximum/minimum sum of contiguous subarray of size K
- Longest substring with K distinct characters
- Anagrams find karna

### 📝 Problems
- [Maximum Sum Subarray of Size K](https://leetcode.com/problems/maximum-sum-subarray-of-size-k/)
- [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)

---

## 2. Two Pointers

### 🎯 Concept
Do pointers (usually `left` aur `right`) ko array ke dono ends se start karke move karte hain jab tak condition meet na ho jaye.

### 🌍 Real-Life Example
**Sorted bookshelf se 2 books dhundna:**
Aapke paas ek sorted bookshelf hai (alphabetical order). Aapko 2 aisi books dhundhni hain jinke page numbers ka sum 500 ho. Aap pehli book (start) aur aakhri book (end) se start karte hain. Agar sum zyada hai, toh end pointer left move karo. Agar kam hai, toh start pointer right move karo.

### ✅ When to Use
- Sorted array mein pairs triplets find karna
- Array ko in-place reverse karna
- Container with Most Water type problems

### 📝 Problems
- [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
- [3Sum](https://leetcode.com/problems/3sum/)
- [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)

---

## 3. Fast & Slow Pointers

### 🎯 Concept
Do pointers different speeds se move karte hain (ek fast, ek slow). Ye technique cycles detect karne aur linked list ke middle node find karne ke liye use hoti hai.

### 🌍 Real-Life Example
**Circular track par 2 runners:**
Maan lo 2 log circular track par daud rahe hain - ek tez (fast pointer) aur ek dheema (slow pointer). Agar track circular hai (cycle hai), toh tez wala dheeme wale ko kabhi na kabhi zaroor catch karega. Agar track straight hai (no cycle), toh tez wala pehle finish ho jayega aur kabhi catch nahi karega.

### ✅ When to Use
- Linked list mein cycle detect karna
- Linked list ka middle node find karna
- Happy Number problem

### 📝 Problems
- [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
- [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
- [Happy Number](https://leetcode.com/problems/happy-number/)

---

## 4. Merge Intervals

### 🎯 Concept
Overlapping intervals ko merge karna ya unke beech mein conflicts find karna.

### 🌍 Real-Life Example
**Meeting rooms schedule:**
Aapke paas kai meetings hain with start aur end times. Aapko dekhna hai ki kaunsi meetings overlap kar rahi hain aur unhe ek combined time block mein merge karna hai. Jaise: [1,3] aur [2,6] overlap karte hain, toh inhe [1,6] mein merge kar do.

### ✅ When to Use
- Overlapping intervals merge karna
- Non-overlapping intervals find karna
- Room allocation problems

### 📝 Problems
- [Merge Intervals](https://leetcode.com/problems/merge-intervals/)
- [Insert Interval](https://leetcode.com/problems/insert-interval/)
- [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)

---

## 5. Cyclic Sort

### 🎯 Concept
Array ko in-place sort karna jab elements ek specific range (jaise 1 to N) mein hon.

### 🌍 Real-Life Example
**Students ko unke roll numbers ke according line mein khada karna:**
Maan lo 5 students hain jinke roll numbers 1-5 hain, lekin wo random order mein khade hain. Aap har student ko check karte hain - agar student ka roll number 3 hai lekin wo position 5 par hai, toh usse uski sahi position (position 3) par bhejo. Ye process repeat karo jab tak sab sahi jagah na aa jayein.

### ✅ When to Use
- Array mein missing number find karna
- Duplicates find karna
- Smallest missing positive number

### 📝 Problems
- [Missing Number](https://leetcode.com/problems/missing-number/)
- [Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)
- [First Missing Positive](https://leetcode.com/problems/first-missing-positive/)

---

## 6. In-place Reversal of LinkedList

### 🎯 Concept
Linked list ko bina extra space use kiye reverse karna by changing pointers.

### 🌍 Real-Life Example
**Train ke dibbon ki direction change karna:**
Maan lo ek train hai jisme 5 dibbe hain: A→B→C→D→E. Aapko engine ko end mein le jana hai bina naye dibbe add kiye. Aap har dibbe ka connection reverse kar dete hain: E→D→C→B→A. Ab engine E se attach ho jayega.

### ✅ When to Use
- Linked list reverse karna
- Sub-list reverse karna (every K nodes)
- Palindrome linked list check karna

### 📝 Problems
- [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
- [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)
- [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)

---

## 7. Tree BFS

### 🎯 Concept
Tree ko level-by-level traverse karna using Queue (Breadth-First Search).

### 🌍 Real-Life Example
**Office mein announcement karna:**
CEO sabse pehle announcement karta hai (Level 0). Fir managers ko batata hai (Level 1). Fir managers apne team members ko batate hain (Level 2). Ye process level-by-level hota hai - pehle ek level complete, fir next level. Queue use hota hai - jo pehle aaya wo pehle process hoga.

### ✅ When to Use
- Level order traversal
- Minimum depth of tree find karna
- Level average nikalna

### 📝 Problems
- [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- [Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)
- [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/)

---

## 8. Tree DFS

### 🎯 Concept
Tree ko depth-first traverse karna using Recursion ya Stack - ek branch ko completely explore karo, fir backtrack karo.

### 🌍 Real-Life Example
**Maze mein rasta dhundhna:**
Aap ek maze mein ho. Aap ek rasta choose karte haur uske end tak jaate ho (depth-first). Agar dead-end milta hai, toh wapas aate ho (backtrack) aur doosra rasta try karte ho. Ye process repeat karte ho jab tak exit na mil jaye.

### ✅ When to Use
- Path sum problems
- Tree diameter find karna
- All paths from root to leaf

### 📝 Problems
- [Path Sum](https://leetcode.com/problems/path-sum/)
- [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
- [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)

---

## 9. Two Heaps

### 🎯 Concept
Do heaps (Max Heap aur Min Heap) ka use karke data stream ka median find karna.

### 🌍 Real-Life Example
**Class ke students ko 2 groups mein divide karna:**
Maan lo class mein students ke marks aate rehte hain. Aapko hamesha median mark chahiye. Aap students ko 2 groups mein divide karte ho:
- **Lower half** (Max Heap): Chote marks, jisme sabse bada mark top par
- **Upper half** (Min Heap): Bade marks, jisme sabse chota mark top par

Jab naya student aata hai, usse sahi group mein daalo. Median hamesha dono heaps ke top elements se mil jayega.

### ✅ When to Use
- Data stream ka median find karna
- Schedule tasks based on priority

### 📝 Problems
- [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)
- [Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)

---

## 10. Subsets

### 🎯 Concept
Array ke saare possible subsets (power set) generate karna using Backtracking ya Bit Manipulation.

### 🌍 Real-Life Example
**Pizza toppings combinations:**
Pizza shop mein 3 toppings hain: Cheese, Pepperoni, Mushrooms. Customer chahta hai saare possible combinations dekhna:
- No toppings: []
- Single: [Cheese], [Pepperoni], [Mushrooms]
- Double: [Cheese, Pepperoni], [Cheese, Mushrooms], [Pepperoni, Mushrooms]
- All: [Cheese, Pepperoni, Mushrooms]

Total 2³ = 8 combinations (subsets).

### ✅ When to Use
- All subsets generate karna
- Subsets with duplicates handle karna
- Combination sum problems

### 📝 Problems
- [Subsets](https://leetcode.com/problems/subsets/)
- [Subsets II](https://leetcode.com/problems/subsets-ii/) (with duplicates)
- [Permutations](https://leetcode.com/problems/permutations/)

---

## 11. Modified Binary Search

### 🎯 Concept
Binary search ko modify karna different scenarios ke liye - rotated arrays, search in infinite arrays, etc.

### 🌍 Real-Life Example
**Dictionary mein word dhundhna (rotated):**
Maan lo dictionary rotated hai - last page pehle aa gayi hai. Normal binary search kaam nahi karega. Pehle aap "pivot point" dhundhte ho (jahan rotation hua), fir uske basis par modified binary search karte ho.

### ✅ When to Use
- Rotated sorted array mein search karna
- Peak element find karna
- Search in infinite stream

### 📝 Problems
- [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
- [Find Peak Element](https://leetcode.com/problems/find-peak-element/)
- [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

---

## 12. Top K Elements

### 🎯 Concept
Heap (Priority Queue) ka use karke "Top K" elements find karna efficiently.

### 🌍 Real-Life Example
**Cricket team mein top 11 players select karna:**
100 players hain, aapko best 11 select karne hain. Aap ek Min Heap banate ho size 11 ka. Har naye player ko check karte ho - agar uska score heap ke minimum se zyada hai, toh minimum ko hatao aur naye player ko add karo. End mein heap mein top 11 players rahenge.

### ✅ When to Use
- Top K frequent elements
- Kth largest/smallest element
- K closest points

### 📝 Problems
- [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
- [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
- [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/)

---

## 13. K-way Merge

### 🎯 Concept
K sorted arrays/lists ko ek single sorted array mein merge karna using Min Heap.

### 🌍 Real-Life Example
**K different classes ke toppers ko merge karna:**
5 classes hain, har class ke students marks ke according sorted hain. Aapko saare students ko ek sorted list mein chahiye. Aap har class ka pehla student (topper) Min Heap mein daalte ho. Minimum wala student output mein add karo, aur uski class ka next student heap mein daalo. Repeat karo.

### ✅ When to Use
- K sorted lists merge karna
- Smallest range covering elements from K lists
- Kth smallest element in K sorted lists

### 📝 Problems
- [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- [Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/)
- [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)

---

## 14. 0/1 Knapsack (DP)

### 🎯 Concept
Dynamic Programming use karke items ko select karna with given capacity to maximize/minimize value.

### 🌍 Real-Life Example
**Bagpack packing for trek:**
Aap trek par ja rahe ho. Backpack ki capacity 15kg hai. Items hain:
- Water bottle: 2kg, value 10
- Food: 5kg, value 20
- Tent: 10kg, value 30
- First aid: 1kg, value 5

Aapko maximum value chahiye 15kg mein. DP use karke aap har item ko include/exclude karke best combination dhundhte ho.

### ✅ When to Use
- Subset sum problems
- Target sum with given constraints
- Partition problems

### 📝 Problems
- [0/1 Knapsack Problem](https://leetcode.com/problems/partition-equal-subset-sum/)
- [Target Sum](https://leetcode.com/problems/target-sum/)
- [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)

---

## 15. Topological Sort

### 🎯 Concept
Directed Acyclic Graph (DAG) mein nodes ko linear order mein arrange karna taaki har edge u→v ke liye, u pehle aaye.

### 🌍 Real-Life Example
**College courses ka sequence:**
Aapko CS degree complete karni hai. Courses hain:
- Data Structures (prerequisite: Programming)
- Algorithms (prerequisite: Data Structures)
- Machine Learning (prerequisite: Algorithms, Math)

Topological sort se aapko sahi order milega: Programming → Data Structures → Algorithms → Machine Learning. Aap Algorithms se pehle Data Structures nahi padh sakte.

### ✅ When to Use
- Course schedule problems
- Task scheduling with dependencies
- Build systems (compilation order)

### 📝 Problems
- [Course Schedule](https://leetcode.com/problems/course-schedule/)
- [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
- [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/)

---

## 🎓 How to Use This Repository

1. **Pattern samjho:** Pehle concept aur real-life example padho
2. **Problems solve karo:** Diye gaye LeetCode links se problems practice karo
3. **Code dekho:** Har pattern ke solutions `solutions/` folder mein hain
4. **Revision karo:** Weekly revision schedule follow karo

## 📊 Pattern Selection Guide

| Problem Type | Pattern to Use |
|--------------|----------------|
| Sorted Array + Target | Two Pointers / Binary Search |
| Contiguous Subarray | Sliding Window |
| Linked List Cycle | Fast & Slow Pointers |
| Overlapping Intervals | Merge Intervals |
| Tree Level-wise | Tree BFS |
| Tree Path/Depth | Tree DFS |
| Top K Elements | Heap (Top K) |
| Permutations/Combinations | Subsets (Backtracking) |
| Optimization/Max-Min | Dynamic Programming |
| Dependencies/Order | Topological Sort |

## 🚀 Resources

- [LeetCode](https://leetcode.com/)
- [NeetCode Roadmap](https://neetcode.io/)
- [Grokking the Coding Interview](https://www.educative.io/courses/grokking-the-coding-interview)

---

