// "hello world" => "DlroW OlleH"

let myString = "i would love to learn java script";
let reverseString = "";

for (let i = myString.length - 1; i >= 0; i--){
    reverseString += myString[i]
}

console.log("Reverse String: ", reverseString); // 'dlrow olleh'

let arrOfWords = reverseString.split(" ")

console.log("Array of Words: ", arrOfWords) // [ 'dlrow', 'olleh' ]

for (let i = 0; i < arrOfWords.length; i++){
   arrOfWords[i] = arrOfWords[i][0].toUpperCase() + arrOfWords[i].slice(1, arrOfWords[i].length - 1) + arrOfWords[i].slice(arrOfWords[i].length - 1).toUpperCase()
}

console.log("New Array of Words: ",arrOfWords); // [ 'DlroW', 'OlleH' ]

reverseString = arrOfWords.join(" ");


console.log("Final Output: ", reverseString)