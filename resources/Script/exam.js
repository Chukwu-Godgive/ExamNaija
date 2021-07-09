//For Exam page. it collects the scores of the exam and check if it is correct.
document.getElementById("form1").onsubmit=function() {
    question1 = parseInt(document.querySelector('input[name="question1"]:checked').value)

    question2 = parseInt(document.querySelector('input[name="question2"]:checked').value)

    question3 = parseInt(document.querySelector('input[name="question3"]:checked').value)

    question4 = parseInt(document.querySelector('input[name="question4"]:checked').value)

    question5 = parseInt(document.querySelector('input[name="question5"]:checked').value)

    question6 = parseInt(document.querySelector('input[name="question6"]:checked').value)

    question7 = parseInt(document.querySelector('input[name="question7"]:checked').value)

    question8 = parseInt(document.querySelector('input[name="question8"]:checked').value)

    question9 = parseInt(document.querySelector('input[name="question9"]:checked').value)

    question10 = parseInt(document.querySelector('input[name="question10"]:checked').value)

    let result = question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10

// This collects all the scores and stored them
    let inputScore = result
    localStorage.setItem("examScore", result)  
    inputScore = localStorage.getItem("examScore")
}
// For Result page
function checkitout() {
    // This displays the score of the result
    document.getElementById("score").innerHTML = localStorage.getItem("examScore")

    // This Checkmates the score level for grade output
    let grade = localStorage.getItem("examScore")
    if(grade >= 80) {
        let excellent = "Excellent"
        document.getElementById("grade").innerHTML = excellent
    }else if (grade >= 60) {
        let good = "Good"
        document.getElementById("grade").innerHTML = good
    }else if (grade >= 40) {
        let credit = "Credit"
        document.getElementById("grade").innerHTML = credit
    }else if (grade >=20) {
        let pass = "Pass"
        document.getElementById("grade").innerHTML = pass
    }else{
        let fail = "Failed"
        document.getElementById("grade").innerHTML = fail
    }
}