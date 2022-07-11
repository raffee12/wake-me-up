let btn = document.querySelector('.btn')
let para = document.querySelector('.para')
let person = document.querySelector('.person')

const quotes = [
    {
    quote: `“But I will find new habits, new thoughts, new rules. I will become something else.”`,
    person: `― Veronica Roth, Divergent`
},
    {
    quote: `“I don’t need anyone else to distract me from myself anymore,
    like I always thought I would.”`,
    person: `― Charlotte Eriksson`
},
    {
    quote: `“I visited many places,
    Some of them quite
    Exotic and far away,
    But I always returned to myself.”`,
    person: `― Dejan Stojanovic`
},
    {
    quote: `“I like to reinvent myself — it’s part of my job.”`,
    person: `― Karl Lagerfeld`
},
    {
    quote: `“I'm so tired I never want to wake up again. But I've figured out now that it was never them that made me feel that way. It was just me, all along.”`,
    person: `― Maggie Stiefvater`
},
    {
    quote: `
    “Wherever I go, I meet myself.”`,
    person: `― Dejan Stojanovic`
},
    {
    quote: `“What do you mean I have to wait for someone's approval?  I'm someone.  I approve.  So I give myself permission to move forward with my full support!”
    `,
    person: `― Richelle E. Goodrich`
},
    {
    quote: `“I recreate myself; that is my only power.”
    `,
    person: `― Dejan Stojanovic`
},
    {
    quote: `
    “I give myself sometimes admirable advice, but I am incapable of taking it.”
    `,
    person: `
    ― Mary Wortley Montagu`
},
    {
    quote: `
    “Yes I am weird, weird is good. Normal is overrated.”
    `,
    person: `― Mad-D
    `
},
    {
    quote: `

    “I put myself in the way of things happening, and they happened.”
    `,
    person: `― Theodore Roosevelt
    `
},
    {
    quote: `

    “While gazing at myself from yourself, I was beautiful.”
    `,
    person: ` Dejan Stojanovic, The Shape
    `
},





]

btn.addEventListener('click', ()=>{
    let random = Math.floor(Math.random() * quotes.length);
    para.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})