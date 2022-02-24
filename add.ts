/*function addNumbers(a: number, b: number) { 
    return a + b;
} 

var sum: number = addNumbers("10", 15) ;

console.log('Sum of the two numbers is: ' +sum); */

function foo() {
    try {
        return 1; // We expect 1 to be returned
    } catch(err) {
        return 2; // Or 2 in cases of error
    } finally {
        return 3; // Noncompliant: 3 is returned before 1, or 2, which we did not expect
    }
}

