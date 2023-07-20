const getTitle = document.querySelector('.title')

document.addEventListener('keyup', function (event) {

    showkeyUp(event)

    let keyUp = event.key
    let getKeyUp = document.getElementById(keyUp)
    getKeyUp.classList.add('hit')
    getKeyUp.addEventListener('animationend', function () {
        getKeyUp.classList.remove('hit')
    })
})


function showkeyUp(event) {
    if (event.key === 'Backspace') {
        getTitle.innerHTML = getTitle.innerHTML.slice(0, -1)
        return
    }

    getTitle.innerHTML += event.key
}