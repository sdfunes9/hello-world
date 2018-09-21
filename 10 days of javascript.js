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

//Conditional-statements IF-ELSE
/* function getGrade(score) {
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
} */

//Switch statement
function getLetters(s) {
    let letter;
    let firstLetter = s.charAt(0);
    let label1 = ('a'&& 'e'&& 'i'&& 'o'&& 'u');
    let label2 = ('b'&& 'c'&& 'd'&& 'f'&& 'g');
    let label3 = ('h'&& 'j'&& 'k'&& 'l'&& 'm');

    switch (firstLetter) {
        case label1:
        console.log('A');       
            return 'A';
            break;
        case label2:
        console.log('B');
            return 'B';
            break;
        case label3:
        console.log('C');
            return 'C';
            break;
        default:
        console.log('D');
            return 'D';
    }
    return letter;
}
getLetters('mguhbdfgt');