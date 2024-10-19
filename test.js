
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test("One dollar should be 156.5 Yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(3.5);

    
    const expected = 3.5 * 156.5; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(3.5 / 1.07 * 156.5); 
    
})

test("One yen should be 0.0055 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(1);

    const expected = 1 * 0.87 / 156.5;

    expect(fromYenToPound(1)).toBe(0.0055591054313099035); 
});