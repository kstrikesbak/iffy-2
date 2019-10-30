let weightInputs = window.prompt('Please, type in your weight and units')
// const arrNum = result.split(' ')
// operation = result[0]  
// num1 = Number(arrNum[1])
// num2 = Number(arrNum[2])
// // Array Deconstruction
// // const [operation, num1, num2] = result
// const resolution = calculate(operation, num1, num2);

// console.log(resolution)
let arrNum = weightInputs.split(' ')
const weight = arrNum[0]
const unit = arrNum[1]
// const space = arrNum[1]
// const [num1,num2] = result
const result = weightConverter(weight, unit) + '.' + ' ' + advice(weight, unit) + '!'

const printAnswer = document.querySelector('#result');
printAnswer.innerText = result

//document.querySelector('#result').innerText = calculate(operation, num1, num2)