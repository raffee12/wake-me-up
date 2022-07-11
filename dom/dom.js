// const header = document.getElementById('main-heading ')
// console.log(header)
// console.log(document.getElementById('main-heading') 
const header = document.getElementById('main-heading')
console.log(header)
header.style.color = 'purple'
header.style.fontSize = '60px'
var  li = document.querySelectorAll('.list-items')
for(var i =0; i< li.length; i++){
    li[i].style.fontSize = '30px ';
    li[i].style.color= 'purple '
}
const ul = document.querySelector('ul')

// treversing dom
console.log(ul.childNodes)
console.log(ul.firstChild)
console.log(ul.lastChild)
const list = document.createElement('li')
list.setAttribute('id', 'main-heading')
list.textContent= "Do something"
list.removeAttribute('id')
list.classList.add('design')
list.classList.remove('design')
ul.append(list)
// getAttribute method
console.log(list.classList.contains('design'))
// console.log(ul)
// console.log(ul)
