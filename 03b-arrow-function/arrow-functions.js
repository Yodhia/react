function addTwo(a,b) {
    return a+ b;

}

// 1. Remove the function and put arrow between the parameter list and the { }
const addTwo = (a,b) => {
    return a + b
}

// 2. If the arrow function is exactly one line you can remove the curly braces
// AND at the same time if there is a return you HAVE to omit the return
const addTwo = (a, b) => a + b;

// 3. If the arrow function only have one parameter you can omit teh () around the parameters
function calcAreaOfCircle(r) {
    return 22/7 * r **2;
}

// (r) => {
//  return 22/7 * r **2;
// }

// (r) => 22/7 * r **2;

const circleArea = r => 22/7 * r **2;
circleArea(100);