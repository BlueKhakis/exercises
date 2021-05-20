let currentValue = 3;
const counter = document.querySelector('.rating__value')

const stars = document.querySelectorAll('.rating__star');

stars.forEach(function (star, index) {
    star.addEventListener('click', () => {
        handleClick(index)
    })
})

function handleClick(index) {

    currentValue = index+1;

    stars.forEach(function (star, index) {
        if(index < currentValue) {
            star.classList.add('rating__star--on');
        } else {
            star.classList.remove('rating__star--on')
        }
    })

    counter.textContent = currentValue;

}