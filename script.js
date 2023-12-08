// Inspirational quotes array

const quotes = [
    "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. — Walter Anderson", 
    "Success is not final; failure is not fatal: It is the courage to continue that counts. — Winston S. Churchill",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt."
    //add more quotes if needed
];

//function to generate the random quote.
function generateMessage(){
    const randomIndex = Math.floor(Math.random() * quotes.length);


const randomQuote = quotes[randomIndex];

document.getElementById("text-box").value = randomQuote;

//will display the quote in HTML file.
//document.getElementById("message").innerText = randomQuote;
}

generateMessage();




























/*function randomNumber(num) {
    return Math.floor(math.random()* num);
}
console.log(num);*/

/*const newButton = document.createElement('button');
newButton.textContent = 'Click me for an Inspirational Quote!';
document.body.appendChild(newButton);*/

/*function myFunction(){
    quoteArray = new Array()
    quoteArray[0] = "Encouraging someone to be entirely themself is the loudest way to love them."
    quoteArray[1] = "Success is not final, failure is not fatal: it is the courage to continue that counts."
    quoteArray[2] = "The most important thing is to enjoy your life—to be happy—it's all that matters."
}

document.getElementById("clickButton").onclick = myFunction(); {
    document.getElementById("result").innerHTML = myFunction[Math.floor(Math.random() * myFunction.length)];
}*/

