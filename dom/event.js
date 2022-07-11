

const container = document.querySelector('.container h1')
container.style.color = '#f06'
// console.log(container)
const allBoxes = document.querySelectorAll('.box')
console.log(allBoxes);
for(var i = 0; i<allBoxes.length; i++) {
    allBoxes[i].style.backgroundColor = 'purple';
    function boxChanging(){
        allBoxes[i].style.backgroundColor = 'red'
    }

    allBoxes[i].addEventListener('mouseover', boxChanging)
}


