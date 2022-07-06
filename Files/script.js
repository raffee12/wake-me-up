// Examin The Document Object//
// consolw.dir(document)
// console.log(document);
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title = 123;
// console.log(document.doctype)
// console.log(document)
// console.log(document.head)
// console.log(document.all)
// console.log(document.all[9])
// document.all[10]
// console.log(document.getElementById('Items_1'))

// const ul = document.getElementById('items')
// console.log(ul)
const header = document.getElementById('header-title')
header.innerText = "Very Ugly Looking Website. But All has Done By Javasript Dom Manipulation"
// header.innerHTML = '<h1>Welcome</h1>'
// header.style.textAlign = 'center';
// const Submit = document.getElementById('Submit')
// Submit.textContent = "Welcome"
// console.log(Submit)
// getting elements by classname

// var items = document.getElementsByClassName('list-group-item')
// for (var i =0; items.length;i++){
//     items[i].style.backgroundColor = '#333'
// }
//getting elemnts by tags name


// var li = document.getElementsByTagName('li')
// for(var i = 0; i<li.length;i++){
//     li[i].style.backgroundColor = 'purple'
// }

//query selector 



// var input = document.querySelector('input')
// var submit = document.querySelector('input[type="submit"]')
// submit.value = "SEND"
// console.log(submit)
// input.classList.add('bg-dark')
// console.log(input)

var lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.color = 'red'
console.log(lastItem)
var secondItem = document.querySelector('.list-group-item:nth-child(2)')
secondItem.style.color = 'purple'
// console.log(secondItem)

// var data = {
//     title : 'rio',
//     age: '23',
//     fun: function(){
//         return `this ${this.title} and he is ${this.age}`
//     }
// }
// console.log(data.fun())
//tarversing the dom 
 var itemList = document.querySelector('#Items_2')
 var List = document.querySelector('#items')
// var li = document.querySelector('.list-group-item')
// parentNode
// console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = 'purple'
console.log(itemList)
// console.log(itemList.parentNode.parentNode.parentNode)
var headerSection=  document.querySelector('.header-section')
headerSection.parentNode.style.backgroundColor = '#333'
console.log(headerSection)
// //children
// console.log(itemList.childNodes)

// for(var i =0; i < List.length, i++;){
//     List[i].children.style.backgroundColor = 'yellow'
// }
 console.log(itemList.children)
 itemList.children[1].style.backgroundColor = 'blue'
 itemList.children[1].style.borderRadius = '5px'
 List.children[1].style.backgroundColor = 'red'

 //lastElement child
 List.firstElementChild.textContent = 'Hi There'

 List.lastElementChild.textContent = 'This is the I \'m looking for'
 console.log(List)
 List.previousElementSibling.style.color = 'orange' 
 //creating element
 var section = document.createElement('section')
 // add class
 section.className = 'container'
 section.id = "Hello"
 section.setAttribute('title', 'Hello Div')
 var newSection = document.createTextNode('Hello World')

 section.appendChild(newSection)
 console.log(section)
var  label = document.createElement('label')
label.className = 'my-form'
label.id = 'the-form'
label.setAttribute('title', 'hello')
var said = document.createTextNode('Alright')
 label.appendChild(said)
//  console.log(label)
//  var something = document.querySelector('  header .container')
//  var header = document.querySelector(' header h1')
// something.insertBefore(label, header)

var img = document.createElement('img')
img.setAttribute('src', 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')
img.style.width = '50px'
img.style.height = '50px'
img.style.borderRadius = '50%'
img.style.marginTop = '10px'
console.log(img)
// var something = document.querySelector('  header .container')
// var header = document.querySelector(' header h1')
// something.insertBefore(img, header)
// var animals = document.querySelector(' .container')
// var h1 =  document.querySelector(' h1')
// animals.insertBefore(img, h1)
var paradise = document.querySelector('.container')
var everytime = document.querySelector('#Items_')
paradise.insertBefore(img, everytime)

var button = document.getElementById('btn').addEventListener('click', butter)
var describing = document.querySelector('button')
describing.style.backgroundColor = ' #373b44'
describing.style.padding = '10px 15px'
describing.style.width = '100%'
describing.style.border= '1px solid #333'
describing.style.outline= '0'
describing.style.borderRadius = '15px'
describing.style.color = '#fff'

function butter(e){
    // document.getElementById('header-title').textContent = 'Night Changes'
    // document.querySelector('.header-section').style.backgroundColor = '#f4f4f4'

    // console.log(e.target)
    // console.log(e.target.id)
    // console.log(e.target.className)
    // console.log(e.target.classList)
    // console.log(e.offsetY)
    // console.log(e.offsetX)
    // console.log(e.altKey)
    // console.log(e.ctrlKey)
    // console.log(e.shiftKey)


}
var button = document.getElementById('btn');
// button.addEventListener('click', fun)
// button.addEventListener('mousedown', fun)
// button.addEventListener('dblclick', fun)
button.addEventListener('mouseup', fun)

var anything = document.createElement('div')
anything.setAttribute('style', 'width =600px, height =600 background-color = red')
// console.log(anything)
console.log(anything)

// var gettingLabel = document.querySelector('label')
// var gettingContainer = document.querySelector('.title')
// gettingLabel.insertBefore(anything, gettingContainer)
// console.log(gettingLabel)

var box = document.querySelector('.box')
// box.addEventListener('mouseenter',fun)
// box.addEventListener('mouseleave',fun)
// box.addEventListener('mouseOver',fun)
var output = document.getElementById('output')
box.addEventListener('mousemove',fun)
// box.addEventListener('mouseEnter',fun)


  var input = document.querySelector('#Submit')
  var form = document.querySelector('form')
  input.addEventListener('keydown', fun)
  function fun(e) {
    console.log(`Event Type: ${e.type}`);
    console.log(e.target.value)
    document.getElementById('output').innerHTML = `<h1>${e.target.value}</h1>`
// output.innerHTML = `<h1>MouseX ${e.offsetX}</h1><h1>MouseY ${e.offsetY}</h1>`
//     box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 600 )` 
  }