let test = document.querySelector('.test')
let restart = document.querySelector('#again')
let firstBox = document.querySelector('#dice1')
let secondBox = document.querySelector('#dice2')
let message = document.querySelector('#message')


test.addEventListener('click', function () {
    let randomeNum1 = Math.ceil(Math.random() * 6)
    let randomeNum2 = Math.ceil(Math.random() * 6)

    firstBox.innerHTML = randomeNum1
    secondBox.innerHTML = randomeNum2

    if (firstBox.innerHTML == 6 && secondBox.innerHTML == 6) {
        message.innerHTML = 'جفت شیش؟؟؟ بابا تو دیگه خیلی خوش شانسی'
        message.classList.remove('message_hide')
        message.classList.add('message')
        test.disabled = true
        test.classList.add('btn_disabled')
    }

    if (firstBox.innerHTML == secondBox.innerHTML) {
        message.classList.remove('message_hide')
        message.classList.add('message')

        firstBox.classList.add('even')
        secondBox.classList.add('even')

        restart.classList.remove('again_hide')
        restart.classList.add('again')

        test.disabled = true
        test.classList.add('btn_disabled')

    }


})


restart.addEventListener('click', function () {
    history.go(0)
})