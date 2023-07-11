// Mảng mã màu
let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
];

// Số lượng box hiện tại
let totalBoxCount = 0;

// Lấy thẻ div chứa các box
let boxesContainer = document.querySelector('.boxes');

// Lấy thẻ span chứa số lượng total box
let totalBoxSpan = document.querySelector('.points');

// Lấy nút "More box"
let moreBoxBtn = document.getElementById('btn');

// Hàm để cập nhật số lượng total box
function updateTotalBoxCount() {
    totalBoxSpan.textContent = totalBoxCount;
}

// Hàm để xử lý sự kiện click vào box
function handleBoxClick(event) {
    event.target.remove();
    totalBoxCount--;
    updateTotalBoxCount();
}

// Hàm để xử lý sự kiện click vào nút "More box"
function handleMoreBoxClick() {
    for (let i = 0; i < 5; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = colors[i];
        box.addEventListener('click', handleBoxClick);
        boxesContainer.appendChild(box);
        totalBoxCount++;
    }
    updateTotalBoxCount();
}

//Tạo 5 box ban đầu
handleMoreBoxClick();

// Gán sự kiện click cho các box hiện có
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', handleBoxClick);
});

// Gán sự kiện click cho nút "More box"
moreBoxBtn.addEventListener('click', handleMoreBoxClick);
