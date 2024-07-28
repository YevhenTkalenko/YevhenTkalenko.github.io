let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let item = "";

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');


btn1.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        return tg.MainButton.hide()
    } else {
        tg.MainButton.setText('Вы выбрали товар 1!')
        tg.MainButton.show()
    }
})

btn2.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        return tg.MainButton.hide()
    } else {
        tg.MainButton.setText('Вы выбрали товар 2!')
        tg.MainButton.show()
    }
})

btn3.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        return tg.MainButton.hide()
    } else {
        tg.MainButton.setText('Вы выбрали товар 3!')
        tg.MainButton.show()
    }
})

btn4.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        return tg.MainButton.hide()
    } else {
        tg.MainButton.setText('Вы выбрали товар 4!')
        tg.MainButton.show()
    }
})

btn5.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        return tg.MainButton.hide()
    } else {
        tg.MainButton.setText('Вы выбрали товар 5!')
        tg.MainButton.show()
    }
})

btn6.addEventListener("click", () => {
    if (tg.MainButton.isVisible) {
        return tg.MainButton.hide()
    } else {
        tg.MainButton.setText('Вы выбрали товар 6!')
        tg.MainButton.show()
    }
})


Telegram.WebApp.onEvent("mainButtonClicked", () => {
    tg.sendData(item)
})

let usercard = document.getElementById('usercard')
let p = document.createElement('p')
p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`
usercard.appendChild(p)