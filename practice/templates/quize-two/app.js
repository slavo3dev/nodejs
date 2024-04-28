// Quiz questions and answers
const questions = [
    {
        question: "Capital of Serbia?",
        choices: ["Paris", "Belgrade", "Rome", "Berlin, London"],
        correct: 0
    },
    {
        question: "Capital of Croatia?",
        choices: ["Paris", "Zagreb", "Rome", "Berlin, London"],
        correct: 0
    },
   
];

let score = 0;
const questionDiv = document.getElementById("container");
const para = document.createElement("h1");
const node = document.createTextNode("This is new.");
para.appendChild(node);
// document.addEventListener('click',function(event) {

//     const question1 = document.querySelector('input[name="q1"]:checked').value || "";
//     const question2 = document.querySelector('input[name="q2"]:checked').value || "";

//     if(question1 === "belgrade") {
//         score += 1;
//     } 

//     if (question2 === "zagreb") {
//         score += 1;
//     }

//     if (question1,question2) {
//         alert(`You got ${score} out of 2 questions correct!`);
//     }

// });


//    <fieldset>
//             <legend>Capital of Za Dom Spremni:</legend>
//             <div>
//                 <input type="radio" id="huey" name="q2" value="mostar" />
//                 <label for="huey">Mostar</label>
//             </div>

//             <div>
//                 <input type="radio" id="dewey" name="q2" value="belgrade" />
//                 <label for="dewey">Belgrade</label>
//             </div>

//             <div>
//                 <input type="radio" id="louie" name="q2" value="zagreb" />
//                 <label for="louie">Zagreb</label>
//             </div>
//             <div>
//                 <input type="radio" id="louie" name="q2" value="sarajevo" />
//                 <label for="louie">Sarajevo</label>
//             </div>
//         </fieldset>