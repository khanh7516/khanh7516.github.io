let authorList = [
    {
        name: 'A',
        quote:'A rose by any other name would smell as sweet.',
        image:'https://randomuser.me/api/portraits/men/41.jpg',
        color:'#3498db'
    },
    {
        name: 'B',
        quote:'All that glitters is not gold.',
        image:'https://randomuser.me/api/portraits/women/50.jpg',
        color:'#9b59b6'
    },
    {
        name: 'C',
        quote:'All the world a stage, and all the men and women merely players.',
        image:'https://randomuser.me/api/portraits/women/22.jpg',
        color:'#e74c3c'
    },
    {
        name: 'D',
        quote:'Ask not what your country can do for you; ask what you can do for your country.',
        image:'https://randomuser.me/api/portraits/women/76.jpg',
        color:'#2c3e50'
    },
    {
        name:'E',
        quote: 'Ask, and it shall be given you; seek, and you shall find.',
        image:'https://randomuser.me/api/portraits/men/17.jpg',
        color:'#d35400'
    }
]



let text = document.querySelector('.text')
let name1 = document.querySelector('.name')
let authorContainer = document.querySelector('.authors-container')
let test = document.querySelector('.testimonials-container')

let currentAuthor = 0;

for (let i = 0; i < authorList.length; i++) {
    let div = document.createElement('div')
    div.classList.add('author')
    if(i === currentAuthor) {
        div.classList.add('selected')
        updateTextAndName(authorList[i])
    }
    div.innerHTML = `<img src=${authorList[i].image} alt="">`
    div.addEventListener('click', function() {
        let current = document.querySelector('.selected')
        current.classList.remove('selected')
        this.classList.add('selected')
        updateTextAndName(authorList[i])
    })
    authorContainer.appendChild(div)
}


function updateTextAndName(author) {
    text.textContent = author.quote
    name1.textContent = author.name
    test.style.backgroundColor = author.color;
}






