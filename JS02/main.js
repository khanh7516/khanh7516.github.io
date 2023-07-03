let a = [2, 4, 9, 8, 7, 6, 3];

let findMaxInArr = (arr) => {
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > max) max = a[i];
  }
  return max;
};

let findMaxInArr2 = (arr) => {
  return Math.max(...arr);
};

console.log(findMaxInArr2(a));

console.log(findMaxInArr(a));

let findMinInArr = (arr) => {
  let min = 0;
  arr.forEach((ele) => {
    if (ele < min) min = ele;
  });
  return min;
};

console.log(findMinInArr(a));

let newArr = (arr) => {
  let arr1 = [];
  arr.forEach((ele) => {
    arr1.push(ele % 2);
  });
  return arr1;
};

console.log(newArr(a));

console.log(a.map((ele) => ele % 2));

let repeatString = (str) => {
  let arr1 = [];
  for (let i = 0; i < 10; i++) {
    arr1.push(str);
  }
  return arr1.join("");
};

console.log(repeatString("a"));

let repeatString2 = (str) => {
  let arr1 = [];
  for (let i = 0; i < 10; i++) {
    arr1.push(str);
  }
  return arr1.join("-");
};

console.log(repeatString2("a"));

//lab2

let checkElementExist = (arr, num) => {
  return arr.indexOf(num) !== -1;
};

console.log(checkElementExist(a, 5));

let getElementGreater = (arr, num) => {
  return arr.splice(num);
};

console.log(getElementGreater(a, 2));

//Bài 6
let isSymmetricString = (str) => {
  let newStr = str.toLowerCase().replace(" ", "");
  let newStr2 = newStr.split("").reverse().join("");
  return newStr2 == newStr;
};

console.log(isSymmetricString("Race car"));

//Bài 7

let fun = (num) => {
  let myArr = String(num)
    .split("")
    .map((num) => {
      return Number(num);
    });
  myArr.sort((a, b) => a - b);
  let countZero = 0;
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] === 0) {
      countZero++;
    }
  }
  for (let i = 0; i < countZero; i++) {
    myArr.shift();
    myArr.splice(countZero - i, 0, 0);
  }

  return myArr.join("");
};

console.log(fun(53751));
console.log(fun(14350));
console.log(fun(203950));

//Object

let products = [
  {
    name: "Iphone 13 Pro Max", // Tên sản phẩm
    price: 3000000, // Giá mỗi sản phẩm
    brand: "Apple", // Thương hiệu
    count: 2, // Số lượng sản phẩm trong giỏ hàng
  },
  {
    name: "Samsung Galaxy Z Fold3",
    price: 41000000,
    brand: "Samsung",
    count: 1,
  },
  {
    name: "IPhone 11",
    price: 15500000,
    brand: "Apple",
    count: 1,
  },
  {
    name: "OPPO Find X3 Pro",
    price: 19500000,
    brand: "OPPO",
    count: 3,
  },
];

function modulo2(arr) {
  return arr.map((product) => {
    for (const key in product) console.log(product[key]);
  });
}

modulo2(products);

let sumOfCost = products.map((product) => {
  let result = 0;
  result += product.count * product.price;
  return result;
});

console.log(sumOfCost);

console.log(products.filter((product) => product.brand === "Apple"));

console.log(products.filter((product) => product.price > 20000000));

console.log(
  products.filter((product) =>
    product.name.toLowerCase().includes("Pro".toLowerCase())
  )
);

console.log(products.filter((product) => product.brand !== "Samsung"));

console.log(products.sort((a, b) => b.price - a.price));
console.log(products.sort((a, b) => a.count - b.count));

let get2RandomEle = (arr) => {
  let twoEles = [];

  let ele1 = arr[Math.floor(Math.random() * (arr.length - 0))];
  let ele2 = arr[Math.floor(Math.random() * (arr.length - 0))];

  while (ele1 === ele2) {
    ele2 = arr[Math.floor(Math.random() * (arr.length - 0))];
  }

  twoEles.push(ele1);
  twoEles.push(ele2);

  return twoEles;
};

console.log(get2RandomEle(products));
