const dragon = document.querySelector('.the-hidding-content')
const selectingButton = document.querySelector('.the-btn')


function stillDontKnowMyName(){
    if(dragon.classList.contains('the-btn')) {
        dragon.classList.remove('the-btn')
    } else {
        dragon.classList.add('the-btn')
    }
}
selectingButton.addEventListener('mouseover', stillDontKnowMyName)