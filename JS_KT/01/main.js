//Bai1
function getStringHasMaxLength(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input phải là array!!!");
  }

  if (arr.length === 0) {
    return [];
  }

  let maxLength = Math.max(...arr.map((str) => str.length));
  return arr.filter((str) => str.length === maxLength);
}

console.log(getStringHasMaxLength(["aba", "aa", "ad", "c", "vcd"])); // Output: ['aba', 'vcd']

//Bai2
const users = [
  {
    name: "Bùi Công Sơn",
    age: 30,
    isStatus: true,
  },
  {
    name: "Nguyễn Thu Hằng",
    age: 27,
    isStatus: false,
  },
  {
    name: "Phạm Văn Dũng",
    age: 20,
    isStatus: false,
  },
];

function getUsersByAgeAndStatus(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input phải là array!!!");
  }

  return arr.filter((user) => user.age > 25 && user.isStatus === true);
}

function getUsersSortedByAge(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input phải là array!!!");
  }

  return arr.slice().sort((a, b) => a.age - b.age);
}

console.log(getUsersByAgeAndStatus(users));
console.log(getUsersSortedByAge(users));

//Bai3
function getCountElement(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input phải là array!!!");
  }

  let result = {};

  arr.forEach((item) => {
    result[item] = (result[item] || 0) + 1;
  });

  return result;
}

console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));
// Output: { one: 3, two: 1, three: 2 }
