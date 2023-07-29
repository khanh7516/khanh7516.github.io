const headText = document.getElementById("headText");
const postsBtn = document.getElementById("postsBtn");
const albumsBtn = document.getElementById("albumsBtn");
const photosBtn = document.getElementById("photosBtn");
const dataList = document.getElementById("dataList");

const API_URL = "https://jsonplaceholder.typicode.com/";

const fetchData = async (resource) => {
    try {
        const response = await axios (API_URL + resource);
        // console.log(response);
        return response.data;
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};

const setTextH1 = (resourse) => {
    headText.textContent = `Type : ${resourse}`;
};

const renderData = (data) => {
    dataList.innerHTML = "";
    data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.title;
        dataList.appendChild(li);
    });
};

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


const handleButtonClick = async (resource, btn) => {
    try {
        const [data, _] = await Promise.all([fetchData(resource), setTextH1(resource), setActiveButton(btn)]);
        renderData(data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};

postsBtn.addEventListener("click", async() => await handleButtonClick("posts", postsBtn));
albumsBtn.addEventListener("click", async() => await handleButtonClick("albums", albumsBtn));
photosBtn.addEventListener("click", async() => await handleButtonClick("photos", photosBtn));


handleButtonClick("posts", postsBtn);
