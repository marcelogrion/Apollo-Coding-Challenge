
let notConsent = document.querySelector('#not-consent');
let giveConsent = document.querySelector('#give-consent');
let secondSection = document.querySelector('.message');
let thirdSection = document.querySelector('.code');
let txton = document.querySelectorAll('#code>p , #code>h2');
let lg1 = document.querySelector('#lg-1');
let lg2 = document.querySelector('#lg-2');
let lineb = document.querySelector('#lineb');
let line = document.querySelector('#line');
let cg1 = document.querySelector('#cg-1');
let cg2 = document.querySelector('#cg-2');
let tit2 = document.querySelector('#tit-2');
let message = document.querySelector('.message:nth-of-type(n)');
let submit1 = document.querySelector('.message input[type="submit"]');
let inputCodeTxt = document.querySelector('#inputCodetxt');
let code12 = document.querySelector('#code12');
let inputResend = document.querySelector('#inputResend');
let submit2 = document.querySelector('.code input[type="submit"]');
let msg = document.querySelector('#msg');
let msg1 = document.querySelector('.message #text');
let msg2 = document.querySelector('.message #voice');
let msg3 = document.querySelector('.message #mail');
let codeGenerate = '';

msg1.disabled = true;
msg2.disabled = true;
msg3.disabled = true;
submit1.disabled = true;
submit2.disabled = true;
inputCodetxt.disabled = true;

//functions

function displayNone() {
    lg1.style.display = 'none';
    lg2.style.display = 'none';
    lineb.style.display = 'none';
    line.style.display = 'none';
    cg1.style.display = 'none';
    cg2.style.display = 'none';
}
function displayBlock() {
    lg1.style.display = 'block';
    lg2.style.display = 'block';
    lineb.style.display = 'block';
    line.style.display = 'block';
    cg1.style.display = 'block';
    cg2.style.display = 'block';
}

function numRandom(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}
function getCode(godeGet) {
    godeGet = numRandom(999999999999, 100000000000);
    localStorage.setItem('code', godeGet);
}
let verfyCode = localStorage.getItem('code');

function messageClicked(clicked) {
    clicked.onclick = () => {
        txton.forEach(userItem => {
            userItem.style.color = '#595959';
            submit1.style.opacity = '1';
            lineb.style.height = '0';
            lineb.style.transition = '300ms'
            lg2.style.height = '200px';
            cg2.style.background = '#00c221';
        });
        submit1.disabled = false;
    }
}
function inputTxt() {
    let codeInput = inputCodeTxt.value;
    if (!isNaN(codeInput) && codeInput.length >= 0) {
        submit2.style.opacity = '1';
    }
}

// hide all content when not consent is checked
notConsent.onclick = () => {
    if (notConsent.checked) {
        displayNone();
        secondSection.style.opacity = '0';
        thirdSection.style.opacity = '0';
    }
}

// show all content when consent is checked

giveConsent.onclick = () => {
    if (giveConsent.checked) {
        displayBlock();
        secondSection.style.opacity = '1';
        thirdSection.style.opacity = '1';
        line.style.height = '0';
        line.style.transition = '300ms'
        lg1.style.height = '112px';
        cg1.style.background = '#00c221';
        tit2.style.color = '#595959';
    }
    msg1.disabled = false;
    msg2.disabled = false;
    msg3.disabled = false;

}

// when selected acceptance, message method is on
messageClicked(msg1);
messageClicked(msg2);
messageClicked(msg3);

// when selected method, text msg or voice call or email

submit1.onclick = (e) => {
    e.preventDefault();
    if (msg1.checked) {
        msg.innerHTML = 'A SMS has been sent to your mobile phone.'
    } else if (msg2.checked) {
        msg.innerHTML = 'A Voice call has been sent to your phone';
    } else {
        msg.innerHTML = 'An Email has been sent to your computer.';
    }
    getCode();
    code12.innerHTML = 'Ingrese el codigo' + ' ' + localStorage.getItem('code');
    inputCodetxt.disabled = false;
    submit2.disabled = false;
}
//code sent to localstorage for validation

submit2.onclick = () => {
    let codeInput = inputCodeTxt.value;
    let verfyCode = localStorage.getItem('code');
    if (codeInput == verfyCode) {
        alert('mensaje enviado con exito');
    } else {
        alert('el codigo no es correcto');
    }
}

inputResend.onclick = (e) => {
    e.preventDefault();
    let codeInput = inputCodeTxt.value;
    let resend = +prompt(codeGenerate = numRandom(999999999999, 100000000000));
    if(resend == codeInput) {
        if (codeInput == verfyCode) {
            alert('mensaje enviado con exito');
        } else {
            alert('el codigo no es correcto');
        }
    }
}