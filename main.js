

let showMeButton = document.getElementById("showMeButton");

let question = document.createElement('div');
document.body.appendChild(question);
let answer = document.createElement('div');
document.body.appendChild(answer);

showMeButton.addEventListener("click", () => {
    let input = document.getElementById("questionInput");
    let userName = 'Brodie'
    let questionInput = input.value;
    input.value = '';


    /*
    userName ? console.log(`Hello, ${userName}!`)
    : console.log('Hello!')
    */


function showAnswer() {
    question.innerHTML = `${userName}, you asked: ${questionInput}?`
    answer.innerHTML = `${caseAnswer}` 
}

let randomNumber = Math.floor(Math.random() *8)
let eightBall = ''

    switch (randomNumber) {
    case 0:
        caseAnswer = 'It is certain';
        showAnswer(caseAnswer)
        break;
    case 1:
        caseAnswer = 'It is decidedly so'    
        showAnswer(caseAnswer);
        break;
    case 2:
        caseAnswer = 'Reply hazy try again'
        showAnswer(caseAnswer);
        break;
    case 3:
        caseAnswer = 'Cannot predict now'
        showAnswer(caseAnswer);
        break;
    case 4:
        caseAnswer = 'Do not count on it'
        showAnswer(caseAnswer);
        break;
    case 5:
        caseAnswer = 'My sources say no'
        showAnswer(caseAnswer);
        break;
    case 6:
        caseAnswer = 'Outlook not so good'
        showAnswer(caseAnswer);
        break;
    case 7:
        caseAnswer = 'Signs point to yes'
        showAnswer(caseAnswer);
        break;
    }
  })


