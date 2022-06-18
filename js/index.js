const form = document.getElementById("form");
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10, 
    attemptsNumber: 0,
    numberDrawn: function randomValue() {
        return Math.round(Math.random() * this.max);//Math.round vai arredondar, M.random vai trazer num aleatórios conforme o num que eu passar
    }
}

let numberDrawn = Guess.numberDrawn();// Armazenando o valor sorteado

// total de tentativas
function updateAttempt(attempt, value) {
    attempt.innerHTML = 'Tentativa: '  + value
}


function handleSubmit(e) {
    e.preventDefault(); //pra não recarregar a página quando enviar

    let kick = document.getElementById("kick").value;

    if(!kick) {
        alert('Digite algum valor!')
        return;
    };
    
    updateAttempt(attempt, ++Guess.attemptsNumber); 

    if(numberDrawn == kick) {
        playAgain();
        hit();
        ResultBlink();
        status.innerHTML = 'Parabéns, você acertou!';
        result.style.transition = "0.4s"
        result.style.backgroundColor = '#37c978'
        result.style.color = '#fff'
        status.style.color = '#fff'
        let piscando = document.getElementById('form');
        let interval = window.setInterval(function(){
            if(piscando.style.visibility == 'hidden'){
                piscando.style.visibility = 'visible';
            }else{
                piscando.style.visibility = 'hidden';
            }
        }, 700);
        clear();
    } else  if (numberDrawn > kick) {
        status.innerHTML = ("O número é maior!")
        status.style.color = '#de4251'
        clear();
    } else if (numberDrawn < kick) {
        status.innerHTML = ("O número é menor!")
        status.style.color = '#de4251'
        clear();
    }


};

// BTN FICAR FLEX
function playAgain() {
    document.getElementById("btnRestart").style.display = 'flex';
};

function hit() {
    document.getElementById('form').style.display = 'none'
}

//PRA QUANDO EU CLICAR NO BTN RECARREGAR A PÁGINA E JOGAR NOVAMENTE
function restart() {
    document.location.reload(true)
};

// LIMPAR INPUT O ESPAÇO DO NÚMERO CHUTADO
function clear() {
    document.getElementById('kick').value = '';
};



// Pisca o resultado na tela 

function ResultBlink() {
    let blink = document.getElementById('result');
    setInterval(() => {
        blink.style.visibility = (blink.style.visibility == 'hidden' ? '' : 'hidden');
    },700 );
}
