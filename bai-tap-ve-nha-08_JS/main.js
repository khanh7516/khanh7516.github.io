//Bài 1
let calculateFactorial = (num) => {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
//Tính giai thừa của 5 -> Kết quả: 120
console.log(`Giai thừa của 5 là ${calculateFactorial(5)}`); 

//Bài 2
let reverseString = (str) => {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}
//"olleh" là chuỗi đảo ngược của chuỗi "hello"
console.log(`Chuối đảo ngược của chuỗi "hello" là ${reverseString("hello")}`); 

//Bài 3
let translate = (countryCode) => {
  let message = "";

  switch (countryCode) {
    case "VN": //VN -> Việt Nam
      message = "Xin chào";
      break;
    case "EN": //EN -> Anh
      message = "Hello";
      break;
    case "FR": //FR -> Pháp
      message = "Bonjour";
      break;
    case "SP": //SP -> Tây Ban Nha
      message = "Hola";
      break;
    case "GE": //DE -> Dức
      message = "Hallo";
      break;
    case "JP": //JP -> Nhật Bản
      message = "こんにちは";
      break;
    case "KR": //KR -> Hàn Quốc
      message = "안녕하세요";
      break;
    default:   
      message = "Không tìm thấy mã quốc gia!";
      break;
  }

  return message;
}
//In ra kết quả tương ứng với các mã quốc gia
console.log(`Câu chào của nước Việt Nam: ${translate("VN")}`);
console.log(`Câu chào của nước Anh: ${translate("EN")}`);
console.log(`Câu chào của nước Pháp: ${translate("FR")}`); 
console.log(`Câu chào của nước Tây Ban Nha: ${translate("SP")}`); 
console.log(`Câu chào của nước Đức: ${translate("GE")}`); 
console.log(`Câu chào của nước Nhật Bản: ${translate("JP")}`); 
console.log(`Câu chào của nước Hàn Quốc: ${translate("KR")}`); 


//Bài 4
let subString = (str) => {
  if (str.length > 15) {
    let result = "";

    for(let i = 0; i < 10; i++) result += str[i];
    result+="..."
    return result;

  } else return "Chuỗi không đạt yêu cầu";
}

console.log(subString("xinchaocacbandenvoiTechmaster")) //Kết quả: xinchaocac...
console.log(subString("68945678910111212")) //Kết quả: 6894567891...
console.log(subString("6894")) //Kết quả: Chuỗi không đạt yêu cầu