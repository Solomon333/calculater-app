// let num1 = 3
// let num2 = 4

// document.getElementById('num1-el').textContent = num1
// document.getElementById('num2-el').textContent = num2

// let sumEl = document.getElementById("sum-el")

// function add(){

//     let result= num1 + num2
//     sumEl.textContent ="sum: " +  result
    
// }
// function divide(){

//     let result= num1 / num2
//     sumEl.textContent ="sum: " +  result
// }

// function subtract(){

//     let result= num1 - num2
//     sumEl.textContent ="sum: " +  result
// }
// function multiplay(){

//     let result= num1 * num2
//     sumEl.textContent ="sum: " +  result
// }

function display(value){
    document.getElementById("result").value += value 
}
function clearScreen(){
    document.getElementById("result").value = ""
}
function calculate(){
    let sum = document.getElementById("result").value;
    let total = eval(sum)
    document.getElementById("result").value = total
}