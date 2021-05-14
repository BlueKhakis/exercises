const padlock = document.querySelector('.padlock');

const makeTextVisible = () => {
    document.querySelector('.text').classList.add('visible');
}

const makeTextInvisible = () => {
    document.querySelector('.text').classList.remove('visible');
}


let unlocked = false;

const lock = () => {

    padlock.addEventListener('mouseenter', makeTextVisible);
    padlock.addEventListener('mouseleave', makeTextInvisible);
    unlocked = false;

}

const unlock = () => {

    padlock.removeEventListener('mouseenter', makeTextVisible);
    padlock.removeEventListener('mouseleave', makeTextInvisible);
    unlocked = true;

}

lock();

padlock.addEventListener('click', () => {

    if (unlocked) {
        lock();
    } else {
        unlock();
    }

})