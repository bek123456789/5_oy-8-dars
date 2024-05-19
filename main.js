let btnPlus = document.querySelector('.btn_plus')
let countText = document.querySelector('.web_p')
let btnMinus = document.querySelector('.btn_min')
let btn2 = document.querySelector('.btn_2x')
let btn10 = document.querySelector('.btn_10x')
let btn100 = document.querySelector('.btn_100x')

let num = 0

let ReadNumber = () => {
    countText.innerHTML = num
}
ReadNumber()

btnPlus.addEventListener('click', () => {
    ++num
    ReadNumber()
})

btnMinus.addEventListener('click', () => {
    --num
    ReadNumber()
})

btn2.addEventListener('click', () => {
    num *= 2
    ReadNumber()
})

btn10.addEventListener('click', () => {
    num *= 10
    ReadNumber()
})

btn100.addEventListener('click', () => {
    num *= 100
    ReadNumber()
})