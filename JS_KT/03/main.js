const headText = document.getElementById("headText");
const postsBtn = document.getElementById("postsBtn");
const albumsBtn = document.getElementById("albumsBtn");
const photosBtn = document.getElementById("photosBtn");
const dataList = document.getElementById("dataList");

const API_URL = "https://jsonplaceholder.typicode.com/"; 

//hàm set text H1 tương ứng với dữ liệu được lấy
const setTextH1 = (resourse) => {
    headText.textContent = `Type : ${resourse}`;
};

//hàm render dữ liệu ra màn hình tương ứng với dữ liệu được lấy
const renderData = (data) => {
    dataList.innerHTML = "";
    data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.title;
        dataList.appendChild(li);
    });
};

//hàm set active button tương ứng với dữ liệu được lấy
const setActiveButton = (activeBtn) => {
    const buttons = [postsBtn, albumsBtn, photosBtn];
    buttons.forEach((btn) => {
        if (btn === activeBtn) {
            btn.style.backgroundColor = "red";
            btn.style.color = "white"
        } else {
            btn.style.backgroundColor = "";
            btn.style.color = "";
        }
    });
};

//hàm handle thực hiện khi 1 button được click
const handleButtonClick = async (resource, btn) => {
    try {
        const [dataAPI, _] = await Promise.all([axios(API_URL + resource), setTextH1(resource), setActiveButton(btn)]); //thực hiện song song các hành động không liên quan
        renderData(dataAPI.data); //render data sau khi fetch
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};
//gán sự kiện cho các button
postsBtn.addEventListener("click", () =>  handleButtonClick("posts", postsBtn));
albumsBtn.addEventListener("click", () =>  handleButtonClick("albums", albumsBtn));
photosBtn.addEventListener("click", () =>  handleButtonClick("photos", photosBtn));

//khi vừa vào trang (mặc định hiển thị posts)
handleButtonClick("posts", postsBtn);
