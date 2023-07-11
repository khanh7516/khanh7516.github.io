// // function getRandomHexColor() {
// //     let letters = "0123456789ABCDEF";
// //     let color = "#";
// //     for (var i = 0; i < 6; i++) {
// //         color += letters[Math.floor(Math.random() * 16)];
// //     }
// //     return color;
// // }

// function getRandomRgbColor() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     return "rgb(" + r + ", " + g + ", " + b + ")";
// }

// // let text = document.getElementById("text");

// // function showContent() {
// //     let newContent = "0123456789ABCDEF";
// //     text.innerHTML = newContent[Math.floor(Math.random() * 16)];;
// // }


// // let btn = document.getElementById('btn-2');
// // btn.onclick = function() {
// //     let color = getRandomHexColor();
// //     text.style.color = color;

// // }



// // document.getElementById("btn-3").addEventListener("click", function() {
// //     let color = getRandomRgbColor();
// //     text.style.backgroundColor = color;
// // });


// function change() {
//     let ip = document.getElementById("ip");
//     let btn = document.getElementById("btn");
//     if(ip.type === "password") {
//         ip.type = "text";
//         btn.innerHTML = "Hide"
//     }else {
//         ip.type = "password";
//         btn.innerHTML = "Show"
//     }
// }

function checkCounter(c, h1) {
    if(c > 0)  h1.style.color = "green";
    else if( c === 0) h1.style.color = "#333333";
    else h1.style.color = "red";
}

function minus() {
    let h1 = document.getElementById("counter");
    let rs = Number(h1.innerText) - 1;
    h1.innerText = rs; 
    checkCounter(rs, h1);
}


function plus() {
    let h1 = document.getElementById("counter");
    let rs = Number(h1.innerText) + 1;
    h1.innerText = rs; 
    checkCounter(rs, h1);
}


// document.addEventListener("click", function(event) {
//     let preCir = document.querySelector(".circle");
//     if (preCir) {
//         document.body.removeChild(preCir);
//     }else {
//         let x = event.clientX;
//         let y = event.clientY;
//         let circle = document.createElement("div");
//         circle.setAttribute("class", "circle");
//         circle.style.top = y -25 + "px";
//         circle.style.left = x -25 + "px";
//         document.body.appendChild(circle);
//     }
//     // setTimeout(function() {

//     // }, 1010);
// });


// let circleLeft = 0;
// let circleTop = 0;

// document.addEventListener("keydown", function(event) {
//     // let preCir = document.querySelector(".circle");
//     // if (preCir) {
//     //     document.body.removeChild(preCir);
//     // }else {
//         // let x = event.clientX;
//         // let y = event.clientY;
//         // let preSqu = document.querySelector(".square");
//         // if(preSqu) {
//         //     preSqu.parentElement.removeChild(preSqu);
//         // }
//         // if(event.code === "Enter") {
//         //     console.log(event)
//         //     let x = Math.floor(Math.random() * window.innerWidth);
//         //     let y = Math.floor(Math.random() * window.innerHeight);
//         //     let circle = document.createElement("div");
//         //     circle.setAttribute("class", "circle");
//         //     circle.style.top = y - 25 + "px";
//         //     circle.style.left = x - 25 + "px";
//         //     document.body.appendChild(circle);
//         //     circleLeft = x - 25;
//         //     circleTop = y - 25;
//         // } else 
//         let circle = document.querySelector(".circle");
//         circleTop = circle.style.top;
//         circleLeft = circle.style.left;
//         if (circle !== null) {
//             switch (event.code) {
//                 case "ArrowUp":
//                     place('move', move.style.left-20,  move.style.top);
//                     break;
//                 case "ArrowDown":
//                     place('move', move.style.left+20,  move.style.top);
//                     break;
//                 case "ArrowLeft":
//                     place('move', move.style.left,  move.style.top-20);
//                     break;
//                 case "ArrowRight":
//                     place('move', move.style.left,  move.style.top+20);
//                     break;
//                 default:
//                     break;
//             }

//             circle.style.top = circleTop + "px";
//             circle.style.left = circleLeft + "px";
//         }

//     // }
// });


// // document.addEventListener("keydown", function(event) {
// //     // let preCir = document.querySelector(".circle");
// //     // if (preCir) {
// //     //     document.body.removeChild(preCir);
// //     // }else {
// //         // let x = event.clientX;
// //         // let y = event.clientY;
// //         let preCir = document.querySelector(".circle");
// //         if(preCir) {
// //             preCir.parentElement.removeChild(preCir);
// //         }
// //         if(event.code === "Space") {
// //             let x = Math.floor(Math.random() * window.innerWidth);
// //             let y = Math.floor(Math.random() * window.innerHeight);
// //             let circle = document.createElement("div");
// //             circle.setAttribute("class", "square");
// //             circle.style.top = y -25 + "px";
// //             circle.style.left = x -25 + "px";
// //             document.body.appendChild(circle);
// //         }
// // });


// // document.addEventListener("keydown", function(event) {
// //     // let preCir = document.querySelector(".circle");
// //     // if (preCir) {
// //     //     document.body.removeChild(preCir);
// //     // }else {
// //         // let x = event.clientX;
// //         // let y = event.clientY;
// //         if(event.code !== "Enter" && event.code !== "Space")
// //             document.body.style.backgroundColor = getRandomRgbColor();
// // });


// // document.addEventListener("keydown", function(event) {


// //     switch (event.code) {
// //         case "KeyA":
// //             circle.style.backgroundColor = "red";
// //             break;
// //         case "KeyS":
// //             circle.style.backgroundColor = "green";
// //             break;
// //         case "KeyD":
// //             circle.style.backgroundColor = "blue";
// //             break;
// //         default:
// //             circle.style.backgroundColor = "gray";
// //             break;
// //     }


// // });