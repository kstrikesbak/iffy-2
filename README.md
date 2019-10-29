# Kg/lbs converter and weight advice app

Simple app that converts Kg to lbs and vice versa. This app has the added feature of giving advice based on weight. 

## Getting Started and running the tests

See below for information about running the app on the terminal. The first input is the numerical weight and second is the weight unit (either kg or lbs). Other weights are not accepted but may be available in the near future! The app will also give you advice based on your weight. See the app in live action below:

```bash
week-4/iffy $ node smartApp.js 80 kg
176.3696lbs
you're doing alright don't worry about it. You could potentially up your activity level
week-4/iffy $ node smartApp.js 90 kg
198.4158lbs
eat the right foods and work out a little every week
week-4/iffy $ node smartApp.js 100 kg
220.462lbs
cut down calories and get yourself to the gym son!
```


### Calculations used for this app converter

See breakdown of the functions used to convert kg to lbs and vice versa. 

```javascript
function toKg (pounds) {
    const kg = 0.453592 * pounds;
    console.log(kg +'kg');
}

function toPounds(kg) {
    const pounds = 2.20462 * kg
    console.log(pounds +'lbs');
}
```
## What was used to build it
* Terminal
* Node
* Conversion rates from Google
* Javascript
* Basic maths
  


## Authors

* **Kejal Bhuva** - *Initial work* - [kstrikesbak](https://github.com/kstrikesbak/)


## License

This project is licensed under the (BBB) Bad Boy Bhuva License.

