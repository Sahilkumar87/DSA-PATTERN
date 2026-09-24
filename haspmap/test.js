let map = new Map();

// add
map.set("name", "sahil");
map.set("age", 21);
map.set("country", "India");

// get
console.log(map.get("name")); // sahil

// check
console.log(map.has("age")); // true
console.log(map.has("phone")); // false

// size
console.log(map.size); // 3

// delete
map.delete("country");

// loop
for (let [key, value] of map) {
    console.log(key, value);
}