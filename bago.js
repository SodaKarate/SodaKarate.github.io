
const main = document.getElementById('main');
const quizContainer = document.createElement('div');

const vegeredmeny = document.createElement('h1');

let counter = 0;
function kerdes(szoveg, valaszok, helyes){
    const questionContainer = document.createElement('div');
    const question = document.createElement('h1');
    question.textContent = szoveg;
    questionContainer.appendChild(question);

    valaszok.forEach((valasz, index) => {
        const button = document.createElement('button');
        button.style.margin = '5px';
        button.textContent = valasz;
        button.addEventListener('click', () => {
            if (index === helyes) {
                counter += 1;
                //vegeredmeny.textContent = `Correct answers: ${counter}`;
            }
            quizContainer.removeChild(questionContainer);
            if (quizContainer.childElementCount === 0) {
                vegeredmeny.textContent = `Correct answers: ${counter}`;}
        });
        questionContainer.appendChild(button);
    });

    quizContainer.appendChild(questionContainer);
}

main.appendChild(vegeredmeny);
main.appendChild(quizContainer);

kerdes('1: A Manchester team?',['Real Madrid','manchaster united','dortmund'], 1)
kerdes('2: Where does the town hall face?',['here and there','north'], 1)
kerdes('3: When was the Central Library built?',['1933','1934','1997'], 1)
kerdes('4: Manchester city center dialing code?',['0161','0151','0160'], 0)
kerdes('5: Who designed the new design for the Royal Exchange in 1809?',['Norman Bago','Szigeti Denes','Thomas Harrison'], 2)
kerdes('6: What is the tallest tower on Deansgate?',['East-Tower','South-Tower','West-Tower'], 1)
kerdes('7: What does cathedra mean in Latin?',['Door','Floor','Seat'], 2)
kerdes('8: Where does the name "Manchester" come from?',['Latin','England','Mandarin'], 0)
kerdes('9: How big is Manchester?',['115km^2','115.5km^2','116km^2'], 1)
kerdes('10: Population?',['around 500.000','around 525.000','around 550.000'], 2)