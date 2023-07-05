

let heading = document.querySelectorAll('p');
console.log(heading[1]);
// heading.style.

Array.from(heading).map((e, i) => {
    console.log(e);
    if(i % 2 === 0)
        e.style.color = 'red';
    else e.style.backgroundColor = 'pink';
});
const socialList = [
    {
        label: "google",
        link: "https://google.com"
    },
    {
        label: "facebook",
        link: "https://facebook.com"
    },
    {
        label: "instagram",
        link: "https://instagram.com"
    }
]

let str = "";

socialList.map((e) => {
    str += `<a style = "display: block" href = ${e.link}>${e.label}</a>` 
})


let socialMedia = document.querySelector(".social-media");
socialMedia.innerHTML = str;


//Thêm phần tử

//Tạo 1 phần tử button
const btn = document.createElement('button');
btn.style.display = "block";
//Gán giá trị cho button
btn.innerText = "Nút bấm";
//Thêm button vào cuối body
document.body.appendChild(btn);

//sao chép node button
const btnCopy = btn.cloneNode(true);
//Thêm đối tượng button copy vào đầu body
document.body.prepend(btnCopy);

const script = btn.querySelector('script');
document.body.insertBefore(btn.cloneNode(true), script);




