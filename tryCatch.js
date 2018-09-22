//Try, catch and finally
function reverseString(s) {
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

reverseString(1234);

