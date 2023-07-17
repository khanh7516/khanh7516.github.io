let todoList = [];
let addBtn = document.querySelector(".add");
let input = document.querySelector(".input");
let editButtons = document.querySelectorAll(".edit-button");
let id = 0;
let list = document.querySelector(".list");


const info = document.createElement('p');
info.innerHTML = 'Danh sách công việc trống!';
document.body.appendChild(info);

const checkEmptyList = () => {
    if(todoList.length === 0) info.style.display = 'block';
    else info.style.display = 'none';
}

addBtn.addEventListener("click", function () {
    if(input.value.trim() === '') alert("Tên công việc không được để trống!");
    else{
        let todoE = {
            id: ++id,
            title: input.value.trim(),
            status: false,
        };
        todoList.push(todoE);
        showItems();
        input.value = "";
        checkEmptyList();
    }
});



const showItems = () => {
    list.innerHTML = '';
    todoList.forEach((e) => {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function(event) {
            e.status = checkbox.checked;
            let targetedButton = event.target;
            let targetedLi = targetedButton.parentNode;
            let targetedTitle = targetedLi.querySelector("span");
            targetedTitle.classList.toggle('checked');
        })

        const span = document.createElement('span');
        span.classList.add('title');
        span.textContent = e.title;
        const editButton = document.createElement('button');
        editButton.classList.add('edit-button');
        editButton.textContent = 'Edit';
        editButton.addEventListener("click", function (event) {
            let targetedButton = event.target;
            let targetedLi = targetedButton.parentNode;
            let targetedTitle = targetedLi.querySelector("span");
            let currentTitle = targetedTitle.innerText;
            let newTitle = window.prompt("Enter the new title:", currentTitle);
            if (newTitle !== null) {
                e.title = newTitle;
                showItems();
            }
        })


        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener("click", function() {
            if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
                let index = todoList.findIndex((item) => item.id === e.id);
                todoList.splice(index, 1);
            }
            showItems();
            checkEmptyList();
        })



        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        list.appendChild(li);
    });
};
