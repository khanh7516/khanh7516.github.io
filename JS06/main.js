
// const promise = new Promise((resolve, reject) => {});

// console.log(promise);


// const promiseSuc = new Promise((resolve, reject) => {
//     resolve("succ")
// });

// console.log(promiseSuc);
const img = document.querySelector('img');
//Promise

// const fetchImgs = () => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//         .then(res => {
//             console.log(res);
//             return res.json();
//         })
//         .then(res => {
//             console.log(res)
//             img.src = res.message;
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }

// fetchImgs();



//Async await function

// const fetchImgs = async () => {

//     try {
//         let res = await fetch("https://dog.ceo/api/breeds/image/random");
//         let resJson = await res.json();
//         console.log(resJson)
//         img.src = resJson.message
        
//     } catch (error) {
//         console.log(error);
//     }


// }

// fetchImgs();


// const fetchImgs = async () => {

//     try {
//         let res = await axios.get("https://dog.ceo/api/breeds/image/random");
//         console.log(res)
//         img.src = res.data.message
        
//     } catch (error) {
//         console.log(error);
//     }


// }

// fetchImgs();



const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('select');

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

async function getBreedList() {
    // Gọi API để lấy danh sách giống loài
    let res = await axios.get("https://dog.ceo/api/breeds/list/all")
    console.log(res.data.message);

    // Sau khi có data thì hiển thị kết quả trên giao diện
    renderBreed(res.data.message)
}

function renderBreed(breeds) {
    // Duyệt qua object breeds -> tạo thẻ option -> gắn vào DOM

    // Cách 1: Sử dụng for ... in
    // Cách 2 : Lấy ra danh sách keys của objec (Object.keys) => Duyệt mảng
}

getBreedList()


