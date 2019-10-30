
// if (userInput2 === 'kg') {
//     toPounds(userInput1);
// } else if (userInput2==='lbs') {
//     toKg(userInput1);
// }
// } else {
//     console.log('check your units please');
// }


function weightConverter(weight, unit) {
    if (unit==='kg' || unit==='kgs' || unit==='kilograms') {
      return weight * 2.20462 + 'lbs'
    } else if (unit==='lbs' || unit==='pounds'){
      return weight * 0.453592 + 'kgs'
    } else {
      return "check your units please"
    }
  }

//   advice(100) -> 'You\'re doing great!'

// '100 kg' -> 'You weigh 180 pounds. You\'re doing great!'
// '180 pounds' -> 'You weigh 100 kgs. You\'re doing great!'

function advice(weight, unit) {

    // Check kg before or after conversion.
    if ((weight>=100 && (unit === 'kg' || unit === 'kgs' || unit === 'kilograms')) || (weight>=220 && (unit === 'lbs' || unit === 'pounds'))) {
        return "Cut down calories and get yourself to the gym son"
    } else if ((weight>=90 && (unit === 'kg' || unit === 'kgs' || unit === 'kilograms')) || (weight>=198 && (unit === 'lbs' || unit === 'pounds'))) {
        return "Eat the right foods and work out a little every week"
    } else if ((weight>=80 && (unit === 'kg' || unit === 'kgs' || unit === 'kilograms')) || (weight>=176 && (unit === 'lbs' || unit === 'pounds'))) {
        return "You're doing alright don't worry about it. You could potentially up your activity level"
    } else if ((weight>=70 && (unit === 'kg' || unit === 'kgs' || unit === 'kilograms')) || (weight>=154 && (unit === 'lbs' || unit === 'pounds'))) {
        return "You're perfect"
    } else if ((weight>=60 && (unit === 'kg' || unit === 'kgs' || unit === 'kilograms')) || (weight>=132 && (unit === 'lbs' || unit === 'pounds'))) {
        return "Eat a little more"
    } else {
        return "Up the calories and maintain a healthy diet"
    }
}

// advice(userInput1);

// console.log(advice(userInput1));