let password = "rotiprata123"
let userEnteredPassword = "applepie456"
// when the case for your if/else is only one statement then can use ternary operator
if (userEnteredPassword == password) {
    console.log("Your Password id correct")
} else {
    console.log("Your Password is wrong")
}

// <condition> ? <what to return if true> : <what to return if false>
// userEnteredPassword == password ? console.log("Your password is correct") : console.log("Your password is wrong")
console.log( userEnteredPassword == password ? "Your password is correct" : "Your password is wrong")

let x = 10;
let y = 15;
function whichOneIsBigger(x,y) {
    // return the number that is bigger
    // if ( x > Y) {
    //     return x;
    //} else {
    //      return y;
    //}

return x > y ? x : y;
}