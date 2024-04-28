document.getElementById("check-answers").addEventListener("click", function() {
    const answer1 = document.querySelector('input[name="q1"]:checked');
    const answer2 = document.querySelector('input[name="q2"]:checked'); 

    let result = ""; 

    if (answer1 && answer1.value === "Paris") {
        result += "Question 1: Correct!\n";
    } else {
        result += "Question 1: Incorrect. The correct answer is Paris.\n";
    }

    if (answer2 && answer2.value === "4") {
        result += "Question 2: Correct!\n";
    } else {
        result += "Question 2: Incorrect. The correct answer is 4.\n";
    }

    alert(result); 
});
