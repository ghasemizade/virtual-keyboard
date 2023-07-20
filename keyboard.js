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
    console.log(event)
    getTitle.innerHTML += event.key
}