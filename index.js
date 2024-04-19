const target =  Math.floor(Math.random() * 100 + 1);
console.log(target);

const app =document.getElementById('app');

const h1 = document.createElement('h1');
h1.innerText="Guess the number!";

app.appendChild(h1);


window.alert(guessNumber(target));

//////////////////////////function////////////////////////////
function guessNumber(target){
    let x = parseInt(window.prompt("guess a number between 0 - 100"));
console.log(x);

let i = 1;
let msg;

if(! isNaN(x)){
while (x !== target && i < 10){
    if(! isNaN(x)){
    if(x < target){
        msg = 'target number is higher than your number. another try'
    }
    else{
        msg = 'target number is lower than your number. another try'
    }
    i++;
    x = parseInt(window.prompt(`${msg} guess a number betweem 0 - 100`));
    console.log(msg);
    console.log(i);
}
else{
    msg= "Enter valid number, Restart the game please"
    break;
} 


}


if (x === target){
    msg = 'You win :) !!! the number is ' + target;
}else if(i===10){
    msg = 'Game Over :( .You finished 10 tries';
}
}
else{
    msg= "Enter valid number, Restart the game please"
}

return msg;
}