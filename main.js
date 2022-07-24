let btn = document.querySelectorAll('.btn-container button')
let card2 = document.querySelector('.card-2')
let Card = document.querySelector('.card')
let span = document.querySelector('span')

Array.from(btn).forEach(btn =>{
    btn.addEventListener('click' , e => {
        const rating = e.target.textContent
        span.textContent = rating
        card2.classList.remove('hide')
        Card.classList.add('hide')
    })
})