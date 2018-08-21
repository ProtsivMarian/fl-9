let start = confirm('Do you want to play a game?');

let minLimit = 0;
let maxLimitValue = 5
let maxLimit = maxLimitValue;
let guess = 3;
let totalPrize = 0;
let sumPrize = 10;
let currentPrize = sumPrize;
let defaultPrizeVal = 10;
let nextStep = 5;

if(start){
    let condition = true;
    while(condition){
        let randomNum = number(minLimit, maxLimit);
        while(condition){
            let askUser = prompt(`
                Enter a number from 1 to ${maxLimit}
                Attempts left: ${guess}
                Total prize: ${totalPrize} $
                Possible prize on current attempt ${currentPrize} $
            `);
            if(askUser === randomNum){
                totalPrize = totalPrize + currentPrize;
                let open = confirm('Congratulation! Your prize is: ' + totalPrize + '$. Do you want to continue?');
                randomNum = number(minLimit, maxLimit);
                sumPrize = sumPrize * 3 ;
                currentPrize = sumPrize;
                guess = 3;
                maxLimit = maxLimit + nextStep;
                if(!open){
                    break;
                }
                continue;
            }
            let lowerLimit = 1;
            if(guess === lowerLimit){
                break;
            }
            currentPrize = Math.floor(currentPrize / 2);
            guess --;
        }
        alert('Thank you for a game. Your prize is: ' + totalPrize +'$');
        let tryAgain = confirm('You wants to play again');
        if(tryAgain){
            totalPrize = 0;
            currentPrize = defaultPrizeVal;
            sumPrize = defaultPrizeVal;
            guess = 3;
            maxLimit = maxLimitValue;
            continue;
        }else{
            break;
        }
    }

}else{
    alert('You did not become a millionaire, but can.');
}

function number(min, max){
    let num = 1;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + num)) + min;
}