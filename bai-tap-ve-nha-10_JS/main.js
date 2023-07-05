//Câu 1: Đặt màu văn bản, kích thước phông chữ và nội dung HTML cho thẻ p.

const textElement = document.getElementById("text");
textElement.style.color = "#777";
textElement.style.fontSize = "2rem";
textElement.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";


//Câu 2: Sử dụng vòng lặp để đặt màu chữ cho tất cả các thẻ li thành màu xanh.
const ulElements = document.querySelector("ul:not([id])");
const liElementList = ulElements.querySelectorAll("li");

// Sử dụng vòng lặp để làm việc với các phần tử <li>
for (let i = 0; i < liElementList.length; i++) {
    liElementList[i].style.color = "blue";
}


//Câu 3

// Truy cập ul có id là list
const listElement = document.getElementById("list");

// Thêm 3 thẻ li mới vào cuối danh sách
for (let i = 8; i <= 10; i++) {
    const liElement = document.createElement("li");
    liElement.textContent = "Item " + i;
    listElement.appendChild(liElement);
}

// Sửa nội dung cho thẻ li 1 thành màu đỏ
listElement.children[0].style.color = "red";

// Sửa background cho thẻ li 3 thành màu xanh
listElement.children[2].style.backgroundColor = "green";

// Xóa thẻ li 4
listElement.removeChild(listElement.children[3]);

// Thêm thẻ li mới thay thế cho thẻ li 4 bị xóa
const newLiElement = document.createElement("li");
newLiElement.textContent = "Thẻ mới đã thay thế thẻ 'Item 4'";
listElement.insertBefore(newLiElement, listElement.children[3]);
