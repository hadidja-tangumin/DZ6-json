//DZ-1/1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9_%+-]+([a-zA-Z]@gmail.com)$/;

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'ok'
        gmailResult.style.color = 'green'
    } else{
        gmailResult.innerHTML = 'not ok'
        gmailResult.style.color = 'red'
    }
}

// //DZ-1/2
// let counter = 0
// function moveBlock() {
//     const child = document.querySelector('.child_block')
//     child.style.left = `${counter}px`
//     counter++
//     if (counter <= 450){
//         requestAnimationFrame(moveBlock)
//     }
// }
// moveBlock()
// // console.log(`${counter}px`)



//move block
// const childBlock = document.querySelector('.child_block')
//
// let positionX = 0
// let positionY = 0
//
// const move = () => {
//     if (positionX <= 448 && positionY <= 0) {
//         positionX++
//         childBlock.style.left = `${positionX}px`
//         setTimeout(move, 1)
//     } else if (positionX >= 448 && positionY <= 448) {
//         positionY++
//         childBlock.style.top = `${positionY}px`
//         setTimeout(move, 1)
//     }
//     else if (positionY >= 0 && positionX >= 448) {
//         positionX--
//         childBlock.style.left = `${positionX}px`
//         setTimeout(move, 1)
//     }
//     else if (positionX <= 0 && positionY >= 0) {
//         positionY--
//         childBlock.style.top = `${positionY}px`
//         setTimeout(move, 1)
//     }
// }
//
// move()



// const box = document.querySelector('.box')
//
// let positionX = 0
// let positionY = 0
//
// const move = () => {
//     if (positionX <= 449 && positionY <= 0) {
//         positionX++
//         box.style.left = ${positionX}px
//         setTimeout(move, 1)
//     } else if (positionX >= 449 && positionY <= 449) {
//         positionY++
//         box.style.top = ${positionY}px
//         setTimeout(move, 1)
//     } else if (positionX >= 0 && positionY >= 449) {
//         positionX--
//         box.style.left = ${positionX}px
//         setTimeout(move, 1)
//     } else if (positionX <= 0 && positionY >= 0) {
//         positionY--
//         box.style.top = ${positionY}px
//         setTimeout(move, 1)
//     }
// }
//
// move()






// const blockChild = document.querySelector('.child_block');
// let moveRight = 0;
// let moveBottom = 0;
// let moveLeft = 0;
// let moveTop = 0;
//
// function moveBlock() {
//     if (moveRight < 448) {
//         blockChild.style.left = `${moveRight}px`;
//         moveRight++;
//     } else if (moveRight >= 448 && moveBottom < 448) {
//         blockChild.style.top = `${moveBottom}px`;
//         moveBottom++;
//     } else if (moveBottom >= 448 && moveLeft < 448) {
//         blockChild.style.left = `${448 - moveLeft}px`;
//         moveLeft++;
//     } else if (moveLeft >= 448 && moveTop < 448) {
//         blockChild.style.top = `${448 - moveTop}px`;
//         moveTop++;
//     }else if (moveTop >= 448 && moveRight < 448){
//         blockChild.style.left = `${moveRight}px`;
//         moveRight++;
//     }
//
//     setTimeout(moveBlock, 1);
// }
//
// moveBlock();





// const childBlock= document.querySelector('.child_block')
// let positionX = 0
// let positionY = 0
// const moveBlock = () => {
// if (positionX < 448 && positionY <= 0) {
//     positionX++
//     childBlock.style.left = `${positionX}px`
//     setTimeout(moveBlock)
// }else if (positionX >= 448 && positionY < 448) {
//     positionY++
//     childBlock.style.top = `${positionY}px`
//     setTimeout(moveBlock)
// }else if (positionX > 0 && positionY >= 448) {
//     positionX--
//     childBlock.style.left =`${positionX}px`
//     setTimeout(moveBlock)
// }else if (positionX >= 0 && positionY > 0) {
//     positionY--
//     childBlock.style.top =`${positionY}px`
//     setTimeout(moveBlock)
//     }
// }
//
// moveBlock()




const childBlock= document.querySelector('.child_block')
let positionX = 0
let positionY = 0
const move = () => {
    if (positionX < 448 && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(move, 1)
    }else if (positionX >= 448 && positionY < 448) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(move, 1)
    }else if (positionX > 0 && positionY > 0) {
        positionX--
        childBlock.style.left =`${positionX}px`
        setTimeout(move, 1)
    }
    // else if (positionX >= 0 && positionY > 0) {
    //     positionY--
    //     childBlock.style.top =`${positionY}px`
    //     setTimeout(move, 1)
    // }
}

move()



// DZ-2/1
// Получаем элементы DOM
const display = document.getElementById("minutesS");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let count = 0;
let intervalId = null;

// Функция для увеличения счетчика и обновления отображения
function incrementCounter() {
    count++;
    display.textContent = count;
}

// Обработчик для кнопки "Start"
startBtn.addEventListener("click", () => {
    if (!intervalId) {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        intervalId = setInterval(incrementCounter, 1000);
    }
});

// Обработчик для кнопки "Stop"
stopBtn.addEventListener("click", () => {
    if (intervalId) {
        startBtn.disabled = false;
        stopBtn.disabled = true;
        clearInterval(intervalId);
        intervalId = null;
    }
});

// Обработчик для кнопки "Reset"
resetBtn.addEventListener("click", () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(intervalId);
    intervalId = null;
    count = 0;
    display.textContent = count;
});