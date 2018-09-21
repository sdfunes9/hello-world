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
/* function getLetters(s) {
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
getLetters('mguhbdfgt'); */

//Loops
/* function vowelsAndConsonants(s){
    let vowels = 'aeiou';
    let consonants = '';

    for (let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])){
            console.log(s[i]);
        }else{
            consonants += s[i] + '\n';
        }
    }
    console.log(consonants.trim());
}

vowelsAndConsonants('javascriptloops'); */

//Arrays
/* function secondLargest(arr) {
    arr.sort((x,y) => {return y-x});
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            result = arr[i];
            break;
        }
    }
    console.log(result);
    return result;
}

nums = [2,3,6,6,5,7,8,10];
secondLargest(nums); */

//Try, catch and finally
/* function reverseString(s) {
    try {
        let splitString = s.split("");
        let inverted = splitString.reverse();
        let joined = inverted.join('');
        console.log(joined);        
    } catch (error) {
        console.log(error.message);
        console.log(s);
    }
    
}

reverseString(1234); */

//Throw
function isPositive(a) {
  try {
    if (a > 0) {
        console.log('YES');
        return 'YES';
    } else {
      if (a === 0) {
        throw new Error("Zero Error");
      }else{
          if (a < 0) {
            throw new Error('Negative Error');
          }
      }
    }
  } catch (error) {
      console.log(error.message);
  }
}
//Alternative version for "isPositive"
function isPositiv(b) {
    try {
        if (Math.sign(b) == 0) {
            throw new Error('Zero Error');
        } else {
            if (Math.sign(b) == -1) {
                throw new Error('Negative Error');
            } else {
                console.log('YES');
                return 'YES';
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}
isPositiv(2);
isPositiv(0);
isPositiv(6);