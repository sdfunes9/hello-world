//Factorial
/* let facto = 0;
function factorial(n) {
    if (n>0 && n<=1) {
        facto = 1;
    } else {
        facto = n * factorial(n-1);
    }   
    console.log(facto);
    return facto;
    
}

factorial(3); */

//Conditional-statements
function getGrade(score) {
    let grade;
    if (score <= 30 && score > 25) {
        grade = 'A';
    } else {
        if (score <= 25 && score > 20) {
            grade = 'B';
        } else {
            if (score <= 20 && score > 15) {
                grade = 'C';
            } else {
                if (score <=15 && score > 10) {
                    grade = 'D';
                } else {
                    if (score <= 10 && score > 5) {
                        grade = 'E';
                    }else{
                        if (score <= 5 && score >0) {
                            grade = 'F';
                        }
                    }
                }
            }
        }
    }
    return grade;
}