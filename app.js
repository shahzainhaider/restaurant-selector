console.log('connected')

let start = document.getElementById('start')
let add = document.getElementById('add')
let input = document.getElementById('input')
let restaurant = document.getElementById('restaurant')
let array = []
let ol = document.getElementById('ol')

let index=0

add.addEventListener('click', () => {
    if(input.value.length>0){
        array.push(input.value)
        input.value = ''
        let li = document.createElement('li')
        ol.appendChild(li).innerText = array[index]
        index++
    }
})


let h2 = document.createElement('h2')
start.addEventListener('click', () => {
     let display =restaurant.appendChild(h2)
    if (array.length == 0) {
        display.innerText = 'please add restaurants'
    }
    else {
        let interval = setInterval(() => {
            let random = Math.floor(Math.random() * array.length)
            display.innerText = array[random]
        }, 50);
        setTimeout(() => {
            clearInterval(interval)
        }, 2000);
    }
}) 
