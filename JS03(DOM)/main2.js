//lab1
// 1. Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
// 2. Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
// 3. Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
// 4. Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
// 5. Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
// 6. Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
// 7. Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
// 8. Xóa thẻ có class=“para-1”



//1
const heading = document.querySelector("#heading");
heading.style.color = 'red';

//2
const paraAll = document.querySelectorAll(".para");

Array.from(paraAll).map((e) => {
    e.style.color = "blue";
    e.style.fontSize = "20px"
})

//3
// const para = document.createElement('p');
// para.innerHTML = "<a href='https//facebook.com'> facebook </a>";
// const p3 = document.querySelector(".para3");
// p3.insertAdjacentElement("afterend", para);

//4
const title = document.querySelector("#title");
console.log(title);
title.innerText = "Đây là thẻ tiêu đề";

//6
let newElement = document.createElement('button');
newElement.innerText = "Click me";

let child = document.querySelector('.para-3');
document.body.replaceChild(newElement, child);

//7
let copyPara = document.cloneNode('.para-2');
let para2 = document.querySelector('.para-2');

para2.insertAdjacentElement("afterend", copyPara);


