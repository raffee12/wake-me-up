window.addEventListener("click", ()=> {
    console.log('window')
}, false)
document.addEventListener("click", ()=> {
    console.log('Document')
}, false)

document.querySelector('.div').addEventListener("click", ()=> {
    console.log('Div 2')
}, false)
document.querySelector('.box').addEventListener("click", (e)=> {
    e.stopPropagation()
    console.log('Div 2')
}, false)
document.querySelector('button').addEventListener("click", (e)=> {
    console.log(e.target.innerText = 'Clicked')
}, false)

j