const students = [
  {
    name: "Chris Miller",
    class: "History",
    info: "Failed last exam",
    score: 59
  },
  {
    name: "Courtney Seward",
    class: "History",
    info: "Has completed all homework",
    score: 91
  },
  {
    name: "Garrett Ward",
    class: "History",
    info: "Wonderful at helping other students",
    score: 88
  },
  {
    name: "John Dulaney",
    class: "History",
    info: "Has never missed a class or exam",
    score: 92
  },
  {
    name: "Greg Lawrence",
    class: "History",
    info: "Sub-par performance all around",
    score: 64
  },
  {
    name: "Leah Duvic",
    class: "History",
    info: "Wonderful student",
    score: 97
  },
  {
    name: "Jesse Page",
    class: "History",
    info: "Smokes too much. Distracting.",
    score: 76
  },
  {
    name: "Kevin Haggerty",
    class: "History",
    info: "Falls asleep in class",
    score: 79
  },
  {
    name: "Max Wolf",
    class: "History",
    info: "Talks too much",
    score: 83
  },
  {
    name: "Lissa Goforth",
    class: "History",
    info: "Asks pointless, unrelated questions",
    score: 78
  },
  {
    name: "Tyler Bowman",
    class: "History",
    info: "When was the last time he attended class?",
    score: 48
  },
  {
    name: "Ray Medrano",
    class: "History",
    info: "Needs to contribute to in-class discussions",
    score: 95
  }
]

// Build an HTML element
// USING REST OPERATORS:

const h1 = (...props) => {
  return `<h1 class="${props[1]}">${props[0]}</h1>`
}

const section = (...props) => {
  return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
}

const aside = (...props) => {
  return `<aside class="${props[1]}">${props[0]}</aside>`
}

// Build a component composed of many smaller elements
// Joe's attempt:

const student = (name, clazz, info, status) => `
<div id="student">
  ${h1(name, status)}
  ${section(clazz, "section--padded")}
  ${aside(info, "pushRight")}
</div>
`

// my attempt:

// let studentList = (ary) => {
//   for (let i = 0; i < ary.length; i++) {
//     if (ary[i].score >= 60) {
//       document.querySelector("#container").innerHTML += `
//       ${h1(ary[i].name, "xx-large passing")}
//       `
//     } else {
//       document.querySelector("#container").innerHTML += `
//       ${h1(ary[i].name, "xx-large failing")}
//       `
//     }
//   }
// }

// studentList(students);


// students.forEach((currentStudent) => {
//   let studentComponent = ""
//   if (currentStudent.score > 60) {
//     studentComponent = student(currentStudent.name, currentStudent.class, currentStudent.info, "passing")
//   } else {
//     studentComponent = student(currentStudent.name, currentStudent.class, currentStudent.info, "failing")
//   }

//   document.querySelector("#container").innerHTML += `
//   ${studentComponent}
//   `
// })



// Creating Elements

function printMsg(messages) {
  const fragment = document.createDocumentFragment()
  const article = document.querySelector("#messages");
  for (let i = 0; i < messages.length; i++) {
    let sec = document.createElement("section");
    sec.textContent = messages[i];
    sec.setAttribute("class", "message");
    fragment.appendChild(sec)
  }
  article.appendChild(fragment);
}

let myMsgs = [];

function addMsgs (newMsg) {
  myMsgs.push(newMsg);
}

addMsgs("Hey, how ya doin?");
addMsgs("Not bad, you?");
addMsgs("Crazy weather we're having today, eh?");
addMsgs("Uh, lemme get back to you on that");


printMsg(myMsgs);


// // Create an emperor component element
// const julius = document.createElement('div')
// julius.textContent = "Julius Caesar"
// fragment.appendChild(julius)

// // Create an emperor component element
// const augustus = document.createElement('div')
// augustus.textContent = "Augustus Caesar"
// fragment.appendChild(augustus)

// // Create an emperor component element
// const aurelius = document.createElement('div')
// aurelius.textContent = "Marcus Aurelius"
// fragment.appendChild(aurelius)

// document.querySelector("#emperorList").appendChild(fragment)