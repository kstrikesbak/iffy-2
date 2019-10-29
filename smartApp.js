const userInput1 = process.argv[2];

const userInput2 = process.argv[3];

if (userInput2 === 'kg') {
    toPounds(userInput1);
} else if (userInput2==='lbs') {
    toKg(userInput1);
} else {
    return console.log('check your units please');
}

function toKg (pounds) {
    const kg = 0.453592 * pounds;
    console.log(kg +'kg');
}

function toPounds(kg) {
    const pounds = 2.20462 * kg
    console.log(pounds +'lbs');
}




function advice(userInput1) {
 
    
    
    if (userInput1>=100) {
        return "cut down calories and get yourself to the gym son!"
    } else if (userInput1>=90) {
        return "eat the right foods and work out a little every week"
    } else if (userInput1>=80) {
        return "you're doing alright don't worry about it. You could potentially up your activity level"
    } else if (userInput1>=70) {
        return "you're perfect"
    } else if (userInput1>=60) {
        return "eat a little more"
    } else {
        return "up the calories and maintain a healthy diet"
    }
}

advice(userInput1);

console.log(advice(userInput1));