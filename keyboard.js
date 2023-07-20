document.addEventListener('keyup', function (event) {
    let keyUp = event.key
    let getKeyUp = document.getElementById(keyUp)
    console.log(getKeyUp.id)
    console.log(event)
    getKeyUp.classList.add('hit')
    getKeyUp.addEventListener('animationend', function () {
        getKeyUp.classList.remove('hit')
    })
})