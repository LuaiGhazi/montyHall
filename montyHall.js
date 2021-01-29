const door1 = document.querySelector('#doorImg1')
const door2 = document.querySelector('#doorImg2')
const door3 = document.querySelector('#doorImg3')

let clickCount = 0
let doorArray = ['door1', 'door2', 'door3']

door1.addEventListener('click', firstDoor)
door2.addEventListener('click', secondDoor)
door3.addEventListener('click', thirdDoor)



// Click on the first door should always result 
// in a goat appear 
function firstDoor() {
    if (clickCount === 0 && door1.src == "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door1.png") {
        door1.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/goat.jpg";
        console.log(clickCount)
        doorArray.splice(doorArray.indexOf('door1'), 1)
        console.log(doorArray)
        let randomElement = [Math.floor(Math.random() * doorArray.length)];
        console.log(doorArray[randomElement])
        winningDoor = doorArray[randomElement]
        clickCount += 1
    } else if (door1.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door1.png" && clickCount === 1 && winningDoor == 'door1') {
        alert('You won!')
    } else if (door1.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door1.png" && clickCount === 1 && winningDoor !== 'door1') {
        alert('You lost!')
    }
}

function secondDoor() {
    if (clickCount === 0 && door2.src == "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png") {
        door2.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/goat.jpg";
        clickCount += 1
        console.log(clickCount)
        doorArray.splice(doorArray.indexOf('door2'), 1)
        console.log(doorArray)
        let randomElement = [Math.floor(Math.random() * doorArray.length)];
        console.log(doorArray[randomElement])
        winningDoor = doorArray[randomElement]
    } else if (door2.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png" && clickCount === 1 && winningDoor == 'door2') {
        alert('You won!')
    } else if (door2.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png" && clickCount === 1 && winningDoor !== 'door2') {
        alert('You lost!')
    }
}


function thirdDoor() {
    if (clickCount === 0 && door3.src == "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door3.png") {
        door3.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/goat.jpg";
        clickCount += 1
        console.log(clickCount)
        doorArray.splice(doorArray.indexOf('door3'), 1)
        console.log(doorArray)
        let randomElement = [Math.floor(Math.random() * doorArray.length)];
        console.log(doorArray[randomElement])
        winningDoor = doorArray[randomElement]
    } else if (door2.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png" && clickCount === 1 && winningDoor == 'door2') {
        alert('You won!')
    } else if (door2.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png" && clickCount === 1 && winningDoor !== 'door2') {
        alert('You lost!')
    }
}






// car image - file:///Users/LuaiGhazi/Desktop/montyHall/imgs/car.png 