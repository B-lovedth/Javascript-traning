let num1 = 8
let num2 = 2
let mySign = document.getElementById("sign")
let result = document.getElementById("result")
document.getElementById("num1-el").textContent = num1 //assigns the value of num1 to the text content in HTML doc
document.getElementById("num2-el").textContent = num2 // does similar thing with line 5

function add(){
    mySign.textContent ="+"
    let myMath = num1 + num2
    result.textContent = "Sum: " + myMath 
}

function subtract(){
    mySign.textContent ="-"
    let myMath = num1 - num2
    result.textContent = "Difference: " + myMath
}

function divide(){
    mySign.textContent ="/"
    let myMath = num1 / num2
    result.textContent = "Result: " + myMath
}

function multiply(){
    mySign.textContent ="*"
    let myMath = num1 * num2
    result.textContent = "Product: " + myMath
}

