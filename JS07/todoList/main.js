const API_URL = "http://localhost:3000/todos"
let todoList;

let addBtn = document.querySelector(".add");
let input = document.querySelector(".input");
let list = document.querySelector(".list");

let todoApis = {
    getAllTodo() {
        return axios.get(API_URL);
    },
    createTodo(newTodo) {
        return axios.post(API_URL, newTodo)
    },
    updateTodo(todo) { //todo = {id, title, status}
        const {id, ...updatedTodo} = todo;
        return axios.put(`${API_URL}/${id}`, updatedTodo)
    },
    deleteTodo(id) {
        return axios.delete(`${API_URL}/${id}`)
    }
}

// Hiển thị danh sách todo

const getAllTodo = async () => {
    try {
        let rs = await todoApis.getAllTodo()
        console.log(rs)
        todoList = rs.data;
    }catch(error) {
        console.log(error)
    }
}




const showItems = async () => {
    await getAllTodo()
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
      checkbox.addEventListener("change", async function (event) {
        event.preventDefault();
        // e.status = checkbox.checked;
        try {
            // let rs = 
            await todoApis.updateTodo( {id: e.id, title: e.title, status: checkbox.checked})
        }catch(error) {
            console.log(error)
        }
        showItems();
      });

      const span = document.createElement("span");
      span.classList.add("title");
      span.textContent = e.title;
      if (e.status) span.classList.add("checked");

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", async function (event) {
        event.preventDefault();
        let newTitle = window.prompt("Nhập tiêu đề mới:", e.title);
        if (newTitle.trim() === "") alert("Tên công việc không được để trống!");
        else {
        //   e.title = newTitle.trim();
        try {
            // let rs = 
            await todoApis.updateTodo( {id: e.id, title: newTitle.trim(), status: e.status})
        }catch(error) {
            console.log(error)
        }
          showItems();
        }
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", async function (event) {
        event.preventDefault();
        if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
        //   let index = todoList.findIndex((item) => item.id === e.id);
        //   todoList.splice(index, 1);
        try {
            // let rs =
             await todoApis.deleteTodo(e.id)
        }catch(error) {
            console.log(error)
        }
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

addBtn.addEventListener("click", async function (event) {
    event.preventDefault();
  if (input.value.trim() === "") {
    alert("Tên công việc không được để trống!");
    input.value = "";
  } else {

    let todoE = {
      title: input.value.trim(),
      status: false,
    };
    // todoList.push(todoE);
    try {
        // let rs = 
        await todoApis.createTodo(todoE)
    }catch(error) {
        console.log(error)
    }
    input.value = "";
    showItems();
  }
});

showItems();