//Factorial
let facto = 0;
function factorial(n) {
    if (n>0 && n<=1) {
        facto = 1;
    } else {
        facto = n * factorial(n-1);
    }   
    console.log(facto);
    return facto;
    
}

factorial(3);