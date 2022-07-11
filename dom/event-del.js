const sports = document.querySelector('#sports')

sports.addEventListener('click', (e)=> {
    console.log(e.target.getAttribute('id') + ' is clicked' )

    const target = e.target
    if(target.matches('li')){
        target.style.backgroundColor = 'steelblue'
    }
})
const neSport = document.createElement('li')
neSport.innerText = 'why lol'
neSport.setAttribute('id', 'lil bit confusing')
sports.appendChild(neSport)
const football = document.querySelector('#football')

football.addEventListener('click',  (e)=> {
    // console.log('Button clicked')
    const target = e.target
    if(target.matches('li')){
        target.style.backgroundColor = 'lightgrey'
    }
})

const basketball = document.querySelector('#basketball')
basketball.addEventListener('click',(e)=> {
     const go = e.target
     if(go.matches('li')) {
        go.style.backgroundColor = '#c06c84'
     }
})
const boxing = document.querySelector('#boxing')

boxing.addEventListener('click', (e)=> {
    // console.log('This is something')
    const red = e.target
    if(red.matches('li')){
        red.style.backgroundColor = 'purple'
    }
})
const tennis = document.querySelector('#tennis')
tennis.addEventListener('click', (e)=> {
    // console.log('Button clicked')
    const sweet = e.target;
    if(sweet.matches('li')){
        sweet.style.backgroundColor = ' #355c7d'
    }
})
const golf = document.querySelector('#golf')
golf.addEventListener('click', (e)=> {
    // console.log('Are you ready')
    const tell = e.target;
    if(tell.matches('li')){
        tell.style.backgroundColor = ' #c06c84'
    }
})