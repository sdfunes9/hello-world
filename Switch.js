//Switch statement
function getLetters(s) {
    let letter;
    let firstLetter = s.charAt(0);
    let label1 = ('a'|| 'e'|| 'i'|| 'o'|| 'u');
    let label2 = ('b'|| 'c'|| 'd'|| 'f'|| 'g');
    let label3 = ('h'|| 'j'|| 'k'|| 'l'|| 'm');

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