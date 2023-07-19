let count = 0

document.addEventListener('DOMContentLoaded', (e) => {
let interval = setInterval(incrementCounter, 1000)
function incrementCounter(){
    counter.innerText = ++count
}
const counter = document.getElementById('counter')
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');

minus.addEventListener('click', (e) => {
    if (count > 0) {
    count--
    } 
    console.log(count)
})

plus.addEventListener('click', (e) => {
   incrementCounter()
})

heart.addEventListener('click', (e) => {
    incrementCounter()
})

pause.addEventListener('click', (e) => {
    if (pause.innerText === 'pause') {
    pause.innerText = 'Resume';
    clearInterval(interval)
    minus.disabled = true;
    heart.disabled = true;
    plus.disabled = true;
    } else {
    pause.innerText = 'pause';
    interval = setInterval(incrementCounter, 1000)
    heart.disabled = false;
    minus.disabled = false;
    plus.disabled = false;
    }     
})
}) 
 
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    let input = document.querySelector('input').value
    console.log(input);
    let li = document.createElement('li')
    let list = document.querySelector('#list')
    list.append(li)
    li.innerText = input
})

