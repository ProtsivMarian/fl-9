function reverseNumber(number){
    let reversedDigit = number.toString().split('').reverse().join('');

    return parseInt(reversedDigit) * Math.sign(number);
}
