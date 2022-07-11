let openBtn = document.querySelector('#main-btn')

let modalContainer = document.querySelector('#model-container')

let closeBtn = document.querySelector('#close')

openBtn.addEventListener('click', function() {
    modalContainer.style.display = 'block'
})

closeBtn.addEventListener('click', ()=> {
    modalContainer.style.display = 'none'
})
window.addEventListener('click', (e)=>{
    if(e.target === modalContainer){
        modalContainer.style.display = 'none'
    }
})