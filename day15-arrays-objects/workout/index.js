const padlock = document.querySelector('.padlock');

// padlock.addEventListener('mouseenter', () => {
//     document.querySelector('.text').style.display = 'block';
// })

// padlock.addEventListener('mouseleave', () => {
//     document.querySelector('.text').style.display = 'none';
// })

padlock.addEventListener('mouseenter', () => {
    document.querySelector('.text').classList.add('visible');
})

padlock.addEventListener('mouseleave', () => {
    document.querySelector('.text').classList.remove('visible');
})

padlock.addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('unlocked');
})


