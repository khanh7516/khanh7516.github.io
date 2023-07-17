let todoList = [];
let addBtn = document.querySelector(".add");
let input = document.querySelector(".input");
let list = document.querySelector(".list");

todoList.push({ id: 0, title: "Đi chơi", status: false });
todoList.push({ id: 1, title: "Học bài", status: true });
todoList.push({ id: 2, title: "Đá bóng", status: false });

let id = 2;

const showItems = () => {
  list.innerHTML = "";
  if (todoList.length === 0) {
    const info = document.createElement("p");
    info.textContent = "Danh sách công việc trống!";
    list.appendChild(info);
  } else {
    todoList.forEach((e) => {
      const li = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = e.status;
      checkbox.addEventListener("change", function () {
        e.status = checkbox.checked;
        showItems();
      });

      const span = document.createElement("span");
      span.classList.add("title");
      span.textContent = e.title;
      if (e.status) span.classList.add("checked");

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", function () {
        let newTitle = window.prompt("Nhập tiêu đề mới:", e.title);
        if (newTitle.trim() === "") alert("Tên công việc không được để trống!");
        else {
          e.title = newTitle.trim();
          showItems();
        }
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
          let index = todoList.findIndex((item) => item.id === e.id);
          todoList.splice(index, 1);
        }
        showItems();
      });

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(editButton);
      li.appendChild(deleteButton);
      list.appendChild(li);
    });
  }
};

addBtn.addEventListener("click", function () {
  if (input.value.trim() === "") {
    alert("Tên công việc không được để trống!");
    input.value = "";
  } else {
    let todoE = {
      id: ++id,
      title: input.value.trim(),
      status: false,
    };
    todoList.push(todoE);
    input.value = "";
    showItems();
  }
});

showItems();
