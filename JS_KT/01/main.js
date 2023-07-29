//Bai1
// Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
function getStringHasMaxLength(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input phải là array!!!"); //ném ra lỗi nếu input truyền vào không phải là array
  }

  if (arr.length === 0) {
    //nếu mảng trống return ra 1 mảng trống
    return [];
  }

  //tìm độ dài lớn nhất trong mảng arr
  let maxLength = Math.max(...arr.map((str) => str.length)); //dùng .map để render độ dài từng phần tử, dùng spread (...) để biến các phần tử trong mảng thành các tham số truyền vào Math.max()
  return arr.filter((str) => str.length === maxLength); //lọc ra phần tử có độ dài bằng maxLength
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

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
function getUsersByAgeAndStatus(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input phải là array!!!"); //ném ra lỗi nếu input truyền vào không phải là array
  }

  return arr.filter((user) => user.age > 25 && user.isStatus === true); //trả về 1 mảng mới chứa các object có age > 25 và isStatus = true
}

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
function getUsersSortedByAge(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input phải là array!!!"); //ném ra lỗi nếu input truyền vào không phải là array
  }

  return arr.slice().sort((a, b) => a.age - b.age); //sao chép mảng cũ bằng slice() sau đó sắp xếp mảng được sao chép theo thứ tự age tăng dần
}

console.log(getUsersByAgeAndStatus(users));
console.log(getUsersSortedByAge(users));

//Bai3
// Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
function getCountElement(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input phải là array!!!"); //ném ra lỗi nếu input truyền vào không phải là array
  }
  let result = {}; //tạo mảng result
  let keysInOrder = []; //tạo mảng keysInOrder để lưu lại thứ tự các thuộc tính của object khi return

  arr.forEach((item) => {
    //duyệt từng phần tử
    if (!result.hasOwnProperty(item)) {
      keysInOrder.push(item); //thêm các phần tử duy nhất trong arr vào keysInOrder
    }
    result[item] = (result[item] || 0) + 1; //nếu trong result phần tử tồn tại thì nó được đếm + 1, nếu không giá trị mặc định là 0 và được + 1
  });

  let orderedResult = {}; //sắp xếp các thuộc tính của object theo thứ tự của mảng input VD: {one: 3, three: 2, two: 1} --> {one: 3, two: 1, three: 2}
  keysInOrder.forEach((key) => {
    orderedResult[key] = result[key];
  });

  return orderedResult; //trả về kết quả cuối cùng
}

console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));
// Output: { one: 3, two: 1, three: 2 }
