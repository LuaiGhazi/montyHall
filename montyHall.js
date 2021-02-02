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
    eval(winningDoor).src = "imgs/car.png"
    eval(losingDoor).src = "imgs/goat.jpg"
}



// Click on the first door should always result 
// in a goat appear 
function firstDoor() {
    if (clickCount === 0 && door1.src == "file:///Users/LuaiGhazi/Desktop/montyHall/imgs/Door1.png") {
        //Place a car behind one of the three doors 
        //Randomly select 0, 1 or 2
        console.log(door1.src)
        let randomCarDoor = [Math.floor(Math.random() * carDoorArray.length)];
        //Store the winning door in string format
        winningDoor = carDoorArray[randomCarDoor]
        console.log(`The winning door is: ${winningDoor}`)
        //Assign the two goats behind the other two doors 
        //Renove the winning door from the goatDoorArray 
        goatDoorArray.splice(goatDoorArray.indexOf(winningDoor), 1)
        console.log(`The goat door array is: ${goatDoorArray}`)
        //Reveal the first goat door. 
        //Randomly select 0 or 1
        let randomFirstReveal = [Math.floor(Math.random() * goatDoorArray.length)]
        let firstGoatDoor = goatDoorArray[randomFirstReveal]
        console.log(`The first reveal is: ${firstGoatDoor}`)
        //Store the remaining door that contains a goat 
        goatDoorArray.splice(goatDoorArray.indexOf(firstGoatDoor), 1)
        losingDoor = goatDoorArray[0]
        console.log(`The losing door is: ${firstGoatDoor}`)
        //If it is door1 is the first goatDoor then reveal the other door 
        if ('door1' === firstGoatDoor) {
            losingDoor = firstGoatDoor
            firstGoatDoor = goatDoorArray[0]
        }
        //Reveal the first door with a goat 
        eval(firstGoatDoor).src = "imgs/goat.jpg"
        //Increase click count
        clickCount += 1
        //Now door 1 is the stay option 
        stayDoor = 'door1'
        //losingDoor is the switch option
        switchDoor = losingDoor
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
        //Place a car behind one of the three doors 
        //Randomly select 0, 1 or 2
        let randomCarDoor = [Math.floor(Math.random() * carDoorArray.length)];
        //Store the winning door in string format
        winningDoor = carDoorArray[randomCarDoor]
        console.log(`The winning door is: ${winningDoor}`)
        //Assign the two goats behind the other two doors 
        //Renove the winning door from the goatDoorArray 
        goatDoorArray.splice(goatDoorArray.indexOf(winningDoor), 1)
        console.log(`The goat door array is: ${goatDoorArray}`)
        //Reveal the first goat door. 
        //Randomly select 0 or 1
        let randomFirstReveal = [Math.floor(Math.random() * goatDoorArray.length)]
        let firstGoatDoor = goatDoorArray[randomFirstReveal]
        console.log(`The first reveal is: ${firstGoatDoor}`)
        //Store the remaining door that contains a goat 
        goatDoorArray.splice(goatDoorArray.indexOf(firstGoatDoor), 1)
        losingDoor = goatDoorArray[0]
        console.log(`The losing door is: ${firstGoatDoor}`)
        //If it is door1 is the first goatDoor then reveal the other door 
        if ('door2' === firstGoatDoor) {
            losingDoor = firstGoatDoor
            firstGoatDoor = goatDoorArray[0]
        }
        //Reveal the first door with a goat 
        eval(firstGoatDoor).src = "imgs/goat.jpg"
        //Increase click count
        clickCount += 1
        //Now door 1 is the stay option 
        stayDoor = 'door2'
        //losingDoor is the switch option
        switchDoor = losingDoor
        console.log(`The switch door is: ${switchDoor}`)
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
        //Place a car behind one of the three doors 
        //Randomly select 0, 1 or 2
        let randomCarDoor = [Math.floor(Math.random() * carDoorArray.length)];
        //Store the winning door in string format
        winningDoor = carDoorArray[randomCarDoor]
        console.log(`The winning door is: ${winningDoor}`)
        //Assign the two goats behind the other two doors 
        //Renove the winning door from the goatDoorArray 
        goatDoorArray.splice(goatDoorArray.indexOf(winningDoor), 1)
        console.log(`The goat door array is: ${goatDoorArray}`)
        //Reveal the first goat door. 
        //Randomly select 0 or 1
        let randomFirstReveal = [Math.floor(Math.random() * goatDoorArray.length)]
        let firstGoatDoor = goatDoorArray[randomFirstReveal]
        console.log(`The first reveal is: ${firstGoatDoor}`)
        //Store the remaining door that contains a goat 
        goatDoorArray.splice(goatDoorArray.indexOf(firstGoatDoor), 1)
        losingDoor = goatDoorArray[0]
        console.log(`The losing door is: ${firstGoatDoor}`)
        //If it is door1 is the first goatDoor then reveal the other door 
        if ('door3' === firstGoatDoor) {
            losingDoor = firstGoatDoor
            firstGoatDoor = goatDoorArray[0]
        }
        //Reveal the first door with a goat 
        eval(firstGoatDoor).src = "imgs/goat.jpg"
        //Increase click count
        clickCount += 1
        //Now door 1 is the stay option 
        stayDoor = 'door3'
        //losingDoor is the switch option
        switchDoor = losingDoor
        console.log(`The switch door is: ${switchDoor}`)
        //Show Stay on Door1 

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
                'rgba(0, 0, 0, 0.2)',
            ],
            borderColor: [
                'rgba(108, 122, 137, 1)',
            ],
            borderWidth: 1
        },
        {
            label: 'Switch Cumulative Win Percentage',
            data: [],
            backgroundColor: [
                'rgba(131, 206, 236, 0.2)'
            ],
            borderColor: [
                'rgba(0, 107, 189, 1)',
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