console.log(0 / "a");
// alert("Hello");


let a = (b, c) => b + c;
console.log(a(1,2));

//Bài 1
function checkMark(mark) {
    if (mark >= 85) {
      console.log("A");
    } else if (mark >= 70 && mark < 85) {
      console.log("B");
    } else if (mark >= 40 && mark < 70) {
      console.log("C");
    } else {
      console.log("D");
    }
  }
  
  // Test với các giá trị mark khác nhau
  checkMark(90); // In ra "A"
  checkMark(75); // In ra "B"
  checkMark(60); // In ra "C"
  checkMark(30); // In ra "D"
  

//Bài 2
let checkBiggerNumber = (num1, num2) => (num1 > num2 ) ? num1 : num2;
console.log(checkBiggerNumber(2,5));

//Bài 3
let checkNumber = (num) => {
    if(num > 0) return "Số dương";
    else if(num < 0) return "Số âm";
    else return "0"
}
console.log(checkNumber(0));

//Bài 4
let checkEven = (num) => (num % 2 == 0) ? "Chẵn" : "Lẻ";
console.log(checkEven(19));

//Bài 5
let check35 = (num) => (num % 3 == 0 && num % 5 == 0) ? true : false;
console.log(check35(15));

//Bài 6
let checkSumAB = (a, b, c) => (a + b == c) ? true : false;
console.log(checkSumAB(10, 4, 15));

//***switch case

//Bài 1
let day = 4;

switch (day) {
  case 0:
    console.log("Hôm nay là Chủ nhật");
    break;
  case 1:
    console.log("Hôm nay là Thứ 2");
    break;
  case 2:
    console.log("Hôm nay là Thứ 3");
    break;
  case 3:
    console.log("Hôm nay là Thứ 4");
    break;
  case 4:
    console.log("Hôm nay là Thứ 5");
    break;
  case 5:
    console.log("Hôm nay là Thứ 6");
    break;
  case 6:
    console.log("Hôm nay là Thứ 7");
    break;
  default:
    console.log("Giá trị không hợp lệ");
    break;
}

//Bài 2
let month = 9;

switch (month) {
  case 1:
  case 2:
  case 3:
    console.log("Mùa xuân");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Mùa hạ");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Mùa thu");
    break;
  case 10:
  case 11:
  case 12:
    console.log("Mùa đông");
    break;
  default:
    console.log("Giá trị không hợp lệ");
    break;
}






//***for
//Bài 1
let repeatingString = (character) => {
    let result ="";
    for(let i = 0; i < 10; i++) {
        result+=character;
    }
    return result;
}

console.log(repeatingString("a"));


//Bài 2 + 3
let repeatingStringWithDash = (character, n) => {
    let result ="";
    for(let i = 0; i < n; i++) {
        result+=character;
        if(i < n - 1) result+="-";
    }
    return result;
}

console.log(repeatingStringWithDash("a", 4));

//Bài 4
let sumNumber = () => {
    let result = 0;
    for(let i = 0; i < 100; i++) {
        if(i % 5 == 0) result+= i;
    }
    return result;
}
console.log(sumNumber());

//Bài 5
let vOfglobular = (r) => 3/4 * r * r * r * 3.14;
console.log(vOfglobular(2))

//Bài 6
let sumZ = (num1, num2) => {
    if(num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    let result = 0;
    for(let i = num1 + 1; i < num2; i++){
        result+= i;
    }
    return result;
}

console.log(sumZ(5, 1));

//Bài 7
let isPrime = (number) => {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }

    return true;
};

console.log(isPrime(7)); // Kết quả: true
console.log(isPrime(12)); // Kết quả: false
  
//Bài 8
let sumOfPrimes = (limit) => {
    let sum = 0;

    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) {
            sum += number;
        }
    }

    return sum;
}

console.log(sumOfPrimes(10)); 
console.log(sumOfPrimes(20)); 
  

//Bài 9
let sumOfDivisors = (number) => {
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumOfDivisors(12)); 
console.log(sumOfDivisors(16)); 




