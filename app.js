let daysDiv =document.querySelector('.days')
let hourDiv =document.querySelector('.hours')
let minDiv =document.querySelector('.minutes')
let secDiv =document.querySelector('.seconds')

let currentDate= new Date()
let deadline = new Date('November 4 2024')
let endTime = deadline.getTime()
console.log(endTime)

function updateCounter(){
    let today = new Date()
    let todayTime = today.getTime()
    let remaining = endTime - todayTime

    let oneMinute = 60* 1000
    let oneHour = 60 * oneMinute
    let oneDay = 24 * oneHour


    let remDays = Math.floor((remaining / oneDay))
    let remHours = Math.floor((remaining % oneDay)/oneHour)
    let remMins = Math.floor((remaining % oneHour)/oneMinute)
    let remSecs = Math.floor((remaining % oneMinute)/1000)

    daysDiv.innerHTML = remDays
    hourDiv.innerHTML = remHours
    minDiv.innerHTML = remMins
    secDiv.innerHTML = remSecs
}

setInterval(updateCounter,1000)