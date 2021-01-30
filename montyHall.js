const door1 = document.querySelector('#doorImg1')
const door2 = document.querySelector('#doorImg2')
const door3 = document.querySelector('#doorImg3')

let clickCount = 0
let winCount = 0
let lossCount = 0

let winningDoor = 0
let losingDoor = 0

let carDoorArray = ['door1', 'door2', 'door3']
let goatDoorArray = ['door1', 'door2', 'door3']


door1.addEventListener('click', firstDoor)
door2.addEventListener('click', secondDoor)
door3.addEventListener('click', thirdDoor)

async function changePicture() {
    await eval(winningDoor).src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/car.png"
    await eval(losingDoor).src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/goat.jpg"
}

const awaitChangePicture = await changePicture

// Click on the first door should always result 
// in a goat appear 
function firstDoor() {
    if (clickCount === 0 && door1.src == "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door1.png") {
        // Place a goat behind one of the other two doors and reveal that door 
        // Now only door 2 and door 3 are in the array 
        goatDoorArray.splice(goatDoorArray.indexOf('door1'), 1)
        console.log(`The goat door array is: ${goatDoorArray}`)
        //Randomly place a goat behind door 2 or door 3
        let randomGoatDoor = [Math.floor(Math.random() * goatDoorArray.length)];
        let goatDoor = goatDoorArray[randomGoatDoor]
        console.log(`The goat is behind ${goatDoor}`)
        //Change door 2 or 3 to have a goat image using 'eval' to work with the string
        console.log(`Swtiching image of: ${eval(goatDoor)}`)
        eval(goatDoor).src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/goat.jpg"
        //Randomly select the winning door between door 1 and the remaining door 
        carDoorArray.splice(carDoorArray.indexOf(goatDoor), 1)
        console.log(`The remaining doors are ${carDoorArray}`)
        let randomWinningDoor = [Math.floor(Math.random() * carDoorArray.length)];
        winningDoor = carDoorArray[randomWinningDoor]
        console.log(`The winning door is ${winningDoor}`)
        // Now we have a winning door
        carDoorArray.splice(carDoorArray.indexOf(winningDoor), 1)
        console.log(`The remaining door is ${carDoorArray}`)
        losingDoor = carDoorArray[0]
        console.log(`The remaining door that contains a goat is ${losingDoor}`)
        //Increase click count
        clickCount += 1
    } else if (door1.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door1.png" && clickCount === 1 && winningDoor.src === 'Door1') {
        awaitchangePicture()
        clickCount += 1
        alert('You won!')
    } else if (door1.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door1.png" && clickCount === 1 && winningDoor.src !== "Door1") {
        awaitchangePicture()
        clickCount += 1
        alert('You lost!')
    }
}

function secondDoor() {
    if (clickCount === 0 && door2.src == "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png") {
        // Place a goat behind one of the other two doors and reveal that door 
        // Now only door 2 and door 3 are in the array 
        goatDoorArray.splice(goatDoorArray.indexOf(door2), 1)
        //Randomly place a goat behind door 2 or door 3
        let randomGoatDoor = [Math.floor(Math.random() * goatDoorArray.length)];
        let goatDoor = goatDoorArray[randomGoatDoor]
        goatDoor.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/goat.jpg"
        //Randomly select the winning door between door 1 and the remaining door 
        carDoorArray.splice(carDoorArray.indexOf(goatDoor), 1)
        let randomWinningDoor = [Math.floor(Math.random() * carDoorArray.length)];
        winningDoor = carDoorArray[randomWinningDoor]
        console.log(`The winning door is ${winningDoor}`)
        let remainingDoor = carDoorArray.splice(carDoorArray.indexOf(winningDoor), 1)
        losingDoor = remainingDoor[0]
        //Increase click count
        clickCount += 1
    } else if (door2.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png" && clickCount === 1 && winningDoor == door2) {
        winningDoor.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/car.png"
        losingDoor.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/goat.jpg"
        alert('You won!')
    } else if (door2.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png" && clickCount === 1 && winningDoor !== door2) {
        winningDoor.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/car.png"
        losingDoor.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/goat.jpg"
        alert('You lost!')
    }
}

function thirdDoor() {
    if (clickCount === 0 && door3.src == "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door3.png") {
        // Place a goat behind one of the other two doors and reveal that door 
        // Now only door 2 and door 3 are in the array 
        goatDoorArray.splice(goatDoorArray.indexOf(door3), 1)
        console.log(goatDoorArray)
        //Randomly place a goat behind door 2 or door 3
        let randomGoatDoor = [Math.floor(Math.random() * goatDoorArray.length)];
        let goatDoor = goatDoorArray[randomGoatDoor]
        console.log(goatDoor)
        goatDoor.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/goat.jpg"
        //Randomly select the winning door between door 1 and the remaining door 
        carDoorArray.splice(carDoorArray.indexOf(goatDoor), 1)
        let randomWinningDoor = [Math.floor(Math.random() * carDoorArray.length)];
        winningDoor = carDoorArray[randomWinningDoor]
        let remainingDoor = carDoorArray.splice(carDoorArray.indexOf(winningDoor), 1)
        losingDoor = remainingDoor[0]
        //Increase click count
        clickCount += 1
        console.log(clickCount)
    } else if (door3.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door3.png" && clickCount === 1 && winningDoor == door3) {
        winningDoor.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/car.png"
        losingDoor.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/goat.jpg"
        alert('You won!')
    } else if (door3.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door3.png" && clickCount === 1 && winningDoor !== door3) {
        winningDoor.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/car.png"
        losingDoor.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/goat.jpg"
        alert('You lost!')
    }
}



// function secondDoor() {
//     if (clickCount === 0 && door2.src == "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png") {
//         door2.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/goat.jpg";
//         console.log(clickCount)
//         doorArray.splice(doorArray.indexOf('door2'), 1)
//         console.log(doorArray)
//         let randomElement = [Math.floor(Math.random() * doorArray.length)];
//         console.log(doorArray[randomElement])
//         winningDoor = doorArray[randomElement]
//         clickCount += 1
//     } else if (door2.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png" && clickCount === 1 && winningDoor == 'door2') {
//         alert('You won!')
//     } else if (door2.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png" && clickCount === 1 && winningDoor !== 'door2') {
//         alert('You lost!')
//     }
// }


// function thirdDoor() {
//     if (clickCount === 0 && door3.src == "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door3.png") {
//         door3.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/goat.jpg";
//         console.log(clickCount)
//         doorArray.splice(doorArray.indexOf('door3'), 1)
//         console.log(doorArray)
//         let randomElement = [Math.floor(Math.random() * doorArray.length)];
//         console.log(doorArray[randomElement])
//         winningDoor = doorArray[randomElement]
//         clickCount += 1
//     } else if (door2.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png" && clickCount === 1 && winningDoor == 'door2') {
//         alert('You won!')
//     } else if (door2.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png" && clickCount === 1 && winningDoor !== 'door2') {
//         alert('You lost!')
//     }
// }






// car image - file:///Users/LuaiGhazi/Desktop/montyHall/imgs/car.png 