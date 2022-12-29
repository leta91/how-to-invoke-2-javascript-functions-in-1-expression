let x = 24, y = 25; // two variables x and y are defined with their respective values

function a(x) {
return x - 17;
}

a(y) // 8

let b = function(x) {
return x ** 3;
};

console.log(a(b(y))); // the final result printed to the console is 15608 which is the product of two functions that are interwined with each other  
