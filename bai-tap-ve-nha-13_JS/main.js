let dogArrays;
let select = document.createElement('select');

let h1 = document.createElement('h1');
h1.innerText = "Breeds List";
document.body.appendChild(h1);

let div = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');



let h2 = document.createElement('h2');
h2.innerText = 'Sub Breeds List';
div2.appendChild(h2);

let ul = document.createElement('ul');
div2.appendChild(ul);

let img = document.createElement('img');
div3.appendChild(img);


document.body.appendChild(div);
document.body.appendChild(div2);
document.body.appendChild(div3);
function renderOptions(dogArr) {
  let keys = Object.keys(dogArr);
  keys.forEach((option) => {
    let optionE = document.createElement('option');
    optionE.text = option;
    select.appendChild(optionE);
  });
  div.appendChild(select);
}

function renderButton() {
  let button = document.createElement('button');
  button.innerText = 'Get Sub Breed';
  button.addEventListener('click',() => {
    let selectedDogType = select.value;
    console.log(selectedDogType);
    renderLinkOrP(selectedDogType);
  })
  div.appendChild(button);
}

function renderLinkOrP(selectedDogType) {  
    let arr = dogArrays[selectedDogType];
    ul.innerHTML = '';
    img.src = '';
    if(arr.length === 0) {
        let p = document.createElement('p');
        p.innerText = 'Không có sub breed';
        ul.appendChild(p);
    }else{
        arr.forEach((type) => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = type;
            a.href = '#';
            a.addEventListener('click', () => {
                getRandomDogImg(selectedDogType, type);
            });
            li.appendChild(a);
            ul.appendChild(li);
        })
    }

}

async function fetchData() {
  try {
    let res = await axios( "https://jsonplaceholder.typicode.com/post");
    return res;
  } catch (error) {
    console.log("Error occurred:", error);
    return null;
  }
}



async function getRandomDogImg(breed, subBreed) {
  try {
    let res = await axios(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`);
    img.src = res.data.message;
  } catch (error) {
    console.log("Error occurred:", error);
  }
}


async function main() {
    try {
        dogArrays = await fetchData();
        if (dogArrays) {
          renderOptions(dogArrays);
          renderButton();
          console.log(dogArrays);
        } else {
          console.log("Dữ liệu không xác định");
        }
      } catch (error) {
        console.log("Error occurred:", error);
      }
}
main();
