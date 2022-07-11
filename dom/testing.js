const btn = document.querySelector('.btn')
const content = document.querySelector('.content')

function oneMoreTime (){
  if(content.classList.contains('btn')){
    content.classList.remove('btn')
  } else{
    content.classList.add('btn')
  }
}
btn.addEventListener('click', oneMoreTime)