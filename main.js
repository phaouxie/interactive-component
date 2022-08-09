let btn = document.querySelectorAll('.btn-container button')
let card2 = document.querySelector('.card-2')
let Card = document.querySelector('.card')
let span = document.querySelector('span')
let submit = document.querySelector('.submit')

Array.from(btn).forEach(btn =>{
    btn.addEventListener('click' , e => {
        const rating = e.target.textContent
        span.textContent = rating
        
        //btn.classList.remove('hide')
        btn.classList.add('actv')
    })
})
submit.addEventListener('click', function(e){
    //console.log('fauzee');
    //const rating = e.target.textContent
    //console.log(rating);
    card2.classList.remove('hide')
        Card.classList.add('hide')
})
console.log(btn[1]);