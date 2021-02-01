const door1 = document.querySelector('#doorImg1')
const door2 = document.querySelector('#doorImg2')
const door3 = document.querySelector('#doorImg3')

const resetButton = document.querySelector('#reset')

const stayWinDisplay = document.querySelector('#stayWins')
const stayLossDisplay = document.querySelector('#stayLosses')
const stayTotalDisplay = document.querySelector('#stayTotal')
const stayPercentDisplay = document.querySelector('#stayPercentTotal')
const stayLossPercentDisplay = document.querySelector('#stayLossPercentTotal')

const switchWinDisplay = document.querySelector('#switchWins')
const switchLossDisplay = document.querySelector('#switchLosses')
const switchTotalDisplay = document.querySelector('#switchTotal')
const switchPercentDisplay = document.querySelector('#switchPercentTotal')
const switchLossPercentDisplay = document.querySelector('#switchLossPercentTotal')


let clickCount = 0

let stayWinCount = 0
let stayLossCount = 0
let totalStayCount = 0
let winPercentStayCount = 0
let lossPercentStayCount = 0


let switchWinCount = 0
let switchLossCount = 0
let totalSwitchCount = 0
let winPercentSwitchCount = 0
let lossPercentSwitchCount = 0

let stayAttempts = []
let switchAttempts = []

let totalAttempts = 0
let totalAttemptsArr = []

let winningDoor = 0
let losingDoor = 0
let stayDoor = 0

let carDoorArray = ['door1', 'door2', 'door3']
let goatDoorArray = ['door1', 'door2', 'door3']
let switchDoorArray = ['door1', 'door2', 'door3']



door1.addEventListener('click', firstDoor)
door2.addEventListener('click', secondDoor)
door3.addEventListener('click', thirdDoor)
resetButton.addEventListener('click', reset)


function changePicture() {
    eval(winningDoor).src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/car.png"
    eval(losingDoor).src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/goat.jpg"
}



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
        console.log(`Switching image of: ${eval(goatDoor)}`)
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
        console.log(`The winning door is ${winningDoor}`)
        //Increase click count
        clickCount += 1
        //Now door 1 is the stay option 
        stayDoor = 'door1'
        //The remaining door is the switch option
        //The swtich option  is not door1 or goatDoor 
        switchDoorArray.splice(switchDoorArray.indexOf('door1'), 1)
        switchDoorArray.splice(switchDoorArray.indexOf(goatDoor), 1)
        console.log(switchDoorArray)
        switchDoor = switchDoorArray[0]
        console.log(`The switch door is: ${switchDoor}`)

    } else if (door1.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door1.png" && clickCount === 1 && winningDoor === 'door1') {
        if (stayDoor === 'door1') {
            changePicture()
            clickCount += 1
            stayWinCount += 1
            totalStayCount += 1
            winPercentStayCount = stayWinCount / totalStayCount
            lossPercentStayCount = 1 - winPercentStayCount
            stayWinDisplay.textContent = stayWinCount
            stayTotalDisplay.textContent = totalStayCount
            stayPercentDisplay.textContent = Math.round(winPercentStayCount * 100)
            stayLossPercentDisplay.textContent = Math.round(lossPercentStayCount * 100)
            console.log(lossPercentStayCount * 100)
            stayAttempts.push(totalStayCount)
            myChart.data.datasets[0].data.push(winPercentStayCount)
            totalAttempts = Math.max(stayAttempts.length, switchAttempts.length)
            if (totalAttempts !== totalAttemptsArr[totalAttemptsArr.length - 1]) {
                totalAttemptsArr.push(totalAttempts)
            }
            myChart.update()
            alert('You won by staying!')
        } else {
            changePicture()
            console.log('hit the route')
            clickCount += 1
            switchWinCount += 1
            totalSwitchCount += 1
            winPercentSwitchCount = switchWinCount / totalSwitchCount
            lossPercentSwitchCount = 1 - winPercentSwitchCount
            switchWinDisplay.textContent = switchWinCount
            switchTotalDisplay.textContent = totalSwitchCount
            switchPercentDisplay.textContent = winPercentSwitchCount
            switchAttempts.push(totalSwitchCount)
            switchPercentDisplay.textContent = Math.round(winPercentSwitchCount * 100)
            switchLossPercentDisplay.textContent = Math.round(lossPercentSwitchCount * 100)
            myChart.data.datasets[1].data.push(winPercentSwitchCount)
            totalAttempts = Math.max(stayAttempts.length, switchAttempts.length)
            if (totalAttempts !== totalAttemptsArr[totalAttemptsArr.length - 1]) {
                totalAttemptsArr.push(totalAttempts)
            }
            myChart.update()
            alert('You won by swtiching!')
        }

    } else if (door1.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door1.png" && clickCount === 1 && winningDoor !== "door1") {
        if (stayDoor === 'door1') {
            changePicture()
            clickCount += 1
            stayLossCount += 1
            totalStayCount += 1
            winPercentStayCount = stayWinCount / totalStayCount
            lossPercentStayCount = 1 - winPercentStayCount
            console.log(totalStayCount)
            stayLossDisplay.textContent = stayLossCount
            stayTotalDisplay.textContent = totalStayCount
            stayPercentDisplay.textContent = Math.round(winPercentStayCount * 100)
            stayLossPercentDisplay.textContent = Math.round(lossPercentStayCount * 100)
            stayAttempts.push(totalStayCount)
            myChart.data.datasets[0].data.push(winPercentStayCount)
            totalAttempts = Math.max(stayAttempts.length, switchAttempts.length)
            if (totalAttempts !== totalAttemptsArr[totalAttemptsArr.length - 1]) {
                totalAttemptsArr.push(totalAttempts)
            }
            myChart.update()
            alert('You lost by staying!')
        } else {
            changePicture()
            clickCount += 1
            switchLossCount += 1
            totalSwitchCount += 1
            winPercentSwitchCount = switchWinCount / totalSwitchCount
            lossPercentSwitchCount = 1 - winPercentSwitchCount
            switchLossDisplay.textContent = switchLossCount
            switchTotalDisplay.textContent = totalSwitchCount
            switchPercentDisplay.textContent = Math.round(winPercentSwitchCount * 100)
            switchLossPercentDisplay.textContent = Math.round(lossPercentSwitchCount * 100)
            switchAttempts.push(totalSwitchCount)
            myChart.data.datasets[1].data.push(winPercentSwitchCount)
            totalAttempts = Math.max(stayAttempts.length, switchAttempts.length)
            if (totalAttempts !== totalAttemptsArr[totalAttemptsArr.length - 1]) {
                totalAttemptsArr.push(totalAttempts)
            }
            myChart.update()
            alert('You lost by swtiching!')
        }
    }
}

function secondDoor() {
    if (clickCount === 0 && door2.src == "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png") {
        // Place a goat behind one of the other two doors and reveal that door 
        // Now only door 2 and door 3 are in the array 
        goatDoorArray.splice(goatDoorArray.indexOf('door2'), 1)
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
        //Now door 1 is the stay option 
        stayDoor = 'door2'
        //The remaining door is the switch option
        //The swtich option  is not door1 or goatDoor 
        switchDoorArray.splice(switchDoorArray.indexOf('door2'), 1)
        switchDoorArray.splice(switchDoorArray.indexOf(goatDoor), 1)
        switchDoor = switchDoorArray[0]
        console.log(`The swtich door is: ${switchDoor}`)
    } else if (door2.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png" && clickCount === 1 && winningDoor === 'door2') {
        if (stayDoor === 'door2') {
            changePicture()
            clickCount += 1
            stayWinCount += 1
            totalStayCount += 1
            winPercentStayCount = stayWinCount / totalStayCount
            lossPercentStayCount = 1 - winPercentStayCount
            stayWinDisplay.textContent = stayWinCount
            stayTotalDisplay.textContent = totalStayCount
            stayPercentDisplay.textContent = Math.round(winPercentStayCount * 100)
            stayLossPercentDisplay.textContent = Math.round(lossPercentStayCount * 100)
            stayAttempts.push(totalStayCount)
            myChart.data.datasets[0].data.push(winPercentStayCount)
            totalAttempts = Math.max(stayAttempts.length, switchAttempts.length)
            if (totalAttempts !== totalAttemptsArr[totalAttemptsArr.length - 1]) {
                totalAttemptsArr.push(totalAttempts)
            }
            myChart.update()
            alert('You won by staying!')
        } else {
            changePicture()
            console.log('hit the route')
            clickCount += 1
            switchWinCount += 1
            totalSwitchCount += 1
            winPercentSwitchCount = switchWinCount / totalSwitchCount
            lossPercentSwitchCount = 1 - winPercentSwitchCount
            switchWinDisplay.textContent = switchWinCount
            switchTotalDisplay.textContent = totalSwitchCount
            switchPercentDisplay.textContent = Math.round(winPercentSwitchCount * 100)
            switchLossPercentDisplay.textContent = Math.round(lossPercentSwitchCount * 100)
            switchAttempts.push(totalSwitchCount)
            myChart.data.datasets[1].data.push(winPercentSwitchCount)
            totalAttempts = Math.max(stayAttempts.length, switchAttempts.length)
            if (totalAttempts !== totalAttemptsArr[totalAttemptsArr.length - 1]) {
                totalAttemptsArr.push(totalAttempts)
            }
            myChart.update()
            alert('You won by swtiching!')
        }

    } else if (door2.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png" && clickCount === 1 && winningDoor !== "door2") {
        if (stayDoor === 'door2') {
            changePicture()
            clickCount += 1
            stayLossCount += 1
            totalStayCount += 1
            winPercentStayCount = stayWinCount / totalStayCount
            lossPercentStayCount = 1 - winPercentStayCount
            console.log(totalStayCount)
            stayLossDisplay.textContent = stayLossCount
            stayTotalDisplay.textContent = totalStayCount
            stayPercentDisplay.textContent = Math.round(winPercentStayCount * 100)
            stayLossPercentDisplay.textContent = Math.round(lossPercentStayCount * 100)
            stayAttempts.push(totalStayCount)
            myChart.data.datasets[0].data.push(winPercentStayCount)
            totalAttempts = Math.max(stayAttempts.length, switchAttempts.length)
            if (totalAttempts !== totalAttemptsArr[totalAttemptsArr.length - 1]) {
                totalAttemptsArr.push(totalAttempts)
            }
            myChart.update()
            alert('You lost by staying!')
        } else {
            changePicture()
            clickCount += 1
            switchLossCount += 1
            totalSwitchCount += 1
            winPercentSwitchCount = switchWinCount / totalSwitchCount
            lossPercentSwitchCount = 1 - winPercentSwitchCount
            switchLossDisplay.textContent = switchLossCount
            switchTotalDisplay.textContent = totalSwitchCount
            switchPercentDisplay.textContent = Math.round(winPercentSwitchCount * 100)
            switchLossPercentDisplay.textContent = Math.round(lossPercentSwitchCount * 100)
            switchAttempts.push(totalSwitchCount)
            myChart.data.datasets[1].data.push(winPercentSwitchCount)
            totalAttempts = Math.max(stayAttempts.length, switchAttempts.length)
            if (totalAttempts !== totalAttemptsArr[totalAttemptsArr.length - 1]) {
                totalAttemptsArr.push(totalAttempts)
            }
            myChart.update()
            alert('You lost by swtiching!')
        }
    }
}

function thirdDoor() {
    if (clickCount === 0 && door3.src == "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door3.png") {
        // Place a goat behind one of the other two doors and reveal that door 
        // Now only door 2 and door 3 are in the array 
        goatDoorArray.splice(goatDoorArray.indexOf('door3'), 1)
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
        //Now door 1 is the stay option 
        stayDoor = 'door3'
        //The remaining door is the switch option
        //The swtich option  is not door1 or goatDoor 
        switchDoorArray.splice(switchDoorArray.indexOf('door3'), 1)
        switchDoorArray.splice(switchDoorArray.indexOf(goatDoor), 1)
        switchDoor = switchDoorArray[0]
        console.log(`The swtich door is: ${switchDoor}`)
    } else if (door3.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door3.png" && clickCount === 1 && winningDoor === 'door3') {
        if (stayDoor === 'door3') {
            changePicture()
            clickCount += 1
            stayWinCount += 1
            totalStayCount += 1
            winPercentStayCount = stayWinCount / totalStayCount
            lossPercentStayCount = 1 - winPercentStayCount
            stayWinDisplay.textContent = stayWinCount
            stayTotalDisplay.textContent = totalStayCount
            stayPercentDisplay.textContent = Math.round(winPercentStayCount * 100)
            stayLossPercentDisplay.textContent = Math.round(lossPercentStayCount * 100)
            myChart.data.datasets[0].data.push(winPercentStayCount)
            totalAttempts = Math.max(stayAttempts.length, switchAttempts.length)
            if (totalAttempts !== totalAttemptsArr[totalAttemptsArr.length - 1]) {
                totalAttemptsArr.push(totalAttempts)
            }
            myChart.update()
            alert('You won by staying!')
        } else {
            changePicture()
            console.log('hit the route')
            clickCount += 1
            switchWinCount += 1
            totalSwitchCount += 1
            winPercentSwitchCount = switchWinCount / totalSwitchCount
            lossPercentSwitchCount = 1 - winPercentSwitchCount
            switchWinDisplay.textContent = switchWinCount
            switchTotalDisplay.textContent = totalSwitchCount
            switchPercentDisplay.textContent = Math.round(winPercentSwitchCount * 100)
            switchLossPercentDisplay.textContent = Math.round(lossPercentSwitchCount * 100)
            switchAttempts.push(totalSwitchCount)
            myChart.data.datasets[1].data.push(winPercentSwitchCount)
            totalAttempts = Math.max(stayAttempts.length, switchAttempts.length)
            if (totalAttempts !== totalAttemptsArr[totalAttemptsArr.length - 1]) {
                totalAttemptsArr.push(totalAttempts)
            }
            myChart.update()
            alert('You won by swtiching!')
        }

    } else if (door3.src === "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door3.png" && clickCount === 1 && winningDoor !== "door3") {
        if (stayDoor === 'door3') {
            changePicture()
            clickCount += 1
            stayLossCount += 1
            totalStayCount += 1
            winPercentStayCount = stayWinCount / totalStayCount
            lossPercentStayCount = 1 - winPercentStayCount
            console.log(totalStayCount)
            stayLossDisplay.textContent = stayLossCount
            stayTotalDisplay.textContent = totalStayCount
            stayPercentDisplay.textContent = Math.round(winPercentStayCount * 100)
            stayLossPercentDisplay.textContent = Math.round(lossPercentStayCount * 100)
            stayAttempts.push(totalStayCount)
            myChart.data.datasets[0].data.push(winPercentStayCount)
            totalAttempts = Math.max(stayAttempts.length, switchAttempts.length)
            if (totalAttempts !== totalAttemptsArr[totalAttemptsArr.length - 1]) {
                totalAttemptsArr.push(totalAttempts)
            }
            myChart.update()
            alert('You lost by staying!')
        } else {
            changePicture()
            clickCount += 1
            switchLossCount += 1
            totalSwitchCount += 1
            winPercentSwitchCount = switchWinCount / totalSwitchCount
            lossPercentSwitchCount = 1 - winPercentSwitchCount
            switchLossDisplay.textContent = switchLossCount
            switchTotalDisplay.textContent = totalSwitchCount
            switchPercentDisplay.textContent = Math.round(winPercentSwitchCount * 100)
            switchLossPercentDisplay.textContent = Math.round(lossPercentSwitchCount * 100)
            switchAttempts.push(totalSwitchCount)
            myChart.data.datasets[1].data.push(winPercentSwitchCount)
            totalAttempts = Math.max(stayAttempts.length, switchAttempts.length)
            if (totalAttempts !== totalAttemptsArr[totalAttemptsArr.length - 1]) {
                totalAttemptsArr.push(totalAttempts)
            }
            myChart.update()
            alert('You lost by swtiching!')
        }
    }
}
resetButton.addEventListener('click', reset)


function reset() {
    clickCount = 0;
    door1.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door1.png"
    door2.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door2.png"
    door3.src = "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door3.png"
    carDoorArray = ['door1', 'door2', 'door3']
    goatDoorArray = ['door1', 'door2', 'door3']
    switchDoorArray = ['door1', 'door2', 'door3']
}


let ctx = document.getElementById('myChart');

let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: totalAttemptsArr,
        datasets: [{
            label: 'Stay Cumulative Win Percentage',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: 'Switch Cumulative Win Percentage',
            data: [],
            backgroundColor: [
                'rgba(63, 7, 146, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 1,// My absolute max value
                    callback: function (value) {
                        return (value / this.max * 100).toFixed(0) + '%'; // convert it to percentage
                    },
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Percentage',
                }
            }]
        }
    }
});