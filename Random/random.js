
const timeToDoHomework = function(wakeUpTime, mySonTakesHisNap, doSomeHomework) {
    let time = mySonTakesHisNap - doSomeHomework 
    if (myTaskInTheMorning) {
        time = time >= 2
    }
    return time
}

const myTaskInTheMorning = function (wakeUpTime) {

    let duties = 'Drink some cofee, '
    if (wakeUpTime = 2 ) {
        duties =  `Water the plants,  ${wakeUpTime} `
    } else if (wakeUpTime < 0.75) {
        duties = `Start cooking some breakfast. ${wakeUpTime} `
    } else if (wakeUpTime > 1.0 ) {
        duties = `Read a book, ${wakeUpTime} `
    }else {
    
    } 
    return duties
}
    
let wakeUpTime = determinemyTaskInTheMorning(2)
showOnPage(`Your duties for today`)
showOnPage(`Before my son wakes up make sure to do this`)
showOnPage(myTaskInTheMorning(wakeUpTime))
showOnPage('<li>')

wakeUpTime = myTaskInTheMorning(8, 6, false)
showOnPage(`Your duties for today`)
showOnPage(`Once my son wakes up`)
showOnPage(myTaskInTheMorning(wakeUpTime))
showOnPage('<li>')

wakeUpTime = myTaskInTheMorning(8, 7, false)
showOnPage(`Your duties for today`)
showOnPage(`If you have enough time do this`)
showOnPage(myTaskInTheMorning(wakeUpTime, ))
showOnPage('<hr>')


const person = {
    greeting: 'Hello and welcome to my assigment, click close to continue',
}
showOnPage(alert(person.greeting))

const inTheMorning = {
    time: `It is 8am. `,
    son: `My son will wake up in an hour `,
    dog: `Take the dog out for a walk once my son wakes up.`

}
showOnPage(inTheMorning.time + inTheMorning.son + inTheMorning.dog)


const myFreeTime = doSomeHomework 
myFreeTime.sonWakesUp = 2
myFreeTime = {}


const inTheMorning = {
    time: `It is 8am. `,
    son: `My son will wake up in an hour `,
    dog: `Take the dog out for a walk once my son wakes up.`

}
showOnPage(inTheMorning.time + inTheMorning.son + inTheMorning.dog)



console.log(`To do: ${toDo[0]}`)
console.log(`To do: ${toDo[toDo.length - 1]}`)



for ( let count = 0; count < toDo.length; count++) {
    const num = count + 1
    const todo = toDo[count]
    console.log(`${num}. ${todo}`)
 }

 // Counting.. 1
for (let count = 2; count >= 0; count--) {
    console.log(count)
}

for (let count = notes.length - 1; count >= 0; count--) {
   console.log(notes[count])
}

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function (note, index) {
//     return note.title === 'Habbits to work on'
// })  
// console.log(index)

const toDo = ['Take the trash out', 'walk the dog', 'Pay bills', 'water plants', 'fix the sink'] 
 
deleteTodo(toDo, 'pay bills')
console.log(toDo)



toDo.splice(2, 1)

toDo[4] = 'Wash the dishes'

toDo.shift()

console.log(`You have ${toDo.length} to do `)

toDo.forEach(function(toDo, index){
    const num = index + 1
    console.log(`${num}. ${toDo}`)
})


const doSomeHomework = {
    time : 2,
    hour : 1,
    sonWakesUp : `Milo`,
}


const hourFree = function (homework, awake) {
homework.time = homework.time + awake
}

const wakeUpTime = function (homework, time) {
homework.hour = homework.hour + time
}

const firstTask = function (homework) {
    let task = homework.time - homework.hour 
    return `You have ${homework.time} to ${task} hours of homework to do before ${homework.sonWakesUp} wakes up`
}

showOnPage(`Make sure to drink coffee because,`)
showOnPage(firstTask(doSomeHomework))
showOnPage("<li>")
