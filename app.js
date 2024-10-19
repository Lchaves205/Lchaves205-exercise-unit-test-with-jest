

/*
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87   // british pound
}*/

// We declare the function to convert from Euro to Dollar
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar) {
    // Convert from dollars to yen
    let valueInYen = (valueInDollar / 1.07) * 156.5;
    // return the yen value
    return valueInYen;
}


const fromYenToPound = function(valueInYen) {
    // Convert from yen to pounds
    let valueInPound = (valueInYen / 156.5) * 0.87;
    // return the pound value
    return valueInPound;
}



// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };