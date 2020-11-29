document.getElementById("menu").onclick = function() { menu() };
function menu(){
    const barre1 = document.getElementById("barre1").style;
    const barre2 = document.getElementById("barre2").style;
    const barre3 = document.getElementById("barre3").style;
    const menu = document.getElementById('menu').style;
    const menuMain = document.getElementById('menuMain').style;
	if(barre2.opacity == '0'){
		barre2.opacity = '1';
        barre1.transform = 'rotate(0deg)';
        barre3.transform = 'rotate(0deg)';
        barre1.marginTop = '0.5em';
        barre3.marginTop = '0.31em';
        menuMain.marginTop = '-15em';
        menuMain.zIndex = '0';
	}
	else{
		barre2.opacity = '0';
        barre1.transform = 'rotate(47deg)';
        barre3.transform = 'rotate(-47deg)';
        barre1.marginTop = '0.5em';
        barre3.marginTop = '-1.31em';
        menuMain.marginTop = '2em';
        menuMain.zIndex = '0';
	}
}
document.getElementById('question1Menu').onmouseover = function() { question1Over()};
document.getElementById('question2Menu').onmouseover = function() { question2Over()};
document.getElementById('question3Menu').onmouseover = function() { question3Over()};
document.getElementById('question4Menu').onmouseover = function() { question4Over()};
document.getElementById('question5Menu').onmouseover = function() { question5Over()};
document.getElementById('question6Menu').onmouseover = function() { question6Over()};
document.getElementById('question7Menu').onmouseover = function() { question7Over()};
document.getElementById('question8Menu').onmouseover = function() { question8Over()};
document.getElementById('question9Menu').onmouseover = function() { question9Over()};

document.getElementById('question1Menu').onmouseout = function() { question1Out()};
document.getElementById('question2Menu').onmouseout = function() { question2Out()};
document.getElementById('question3Menu').onmouseout = function() { question3Out()};
document.getElementById('question4Menu').onmouseout = function() { question4Out()};
document.getElementById('question5Menu').onmouseout = function() { question5Out()};
document.getElementById('question6Menu').onmouseout = function() { question6Out()};
document.getElementById('question7Menu').onmouseout = function() { question7Out()};
document.getElementById('question8Menu').onmouseout = function() { question8Out()};
document.getElementById('question9Menu').onmouseout = function() { question9Out()};

function question1Over(){
    document.getElementById('question1Menu').style.fontSize = '1.2em';
    document.getElementById('question1Menu').style.backgroundColor = 'rgb(0,74,117)';
    document.getElementById('question1Menu').style.borderRadius = '5px 5px 5px 5px';
}
function question1Out(){
    document.getElementById('question1Menu').style.fontSize = '1em';
    document.getElementById('question1Menu').style.backgroundColor = 'rgb(0,156,221)';
    document.getElementById('question1Menu').style.borderRadius = '5px 0 0 5px';
}
function question2Over(){
    document.getElementById('question2Menu').style.fontSize = '1.2em';
    document.getElementById('question2Menu').style.backgroundColor = 'rgb(0,74,117)';
    document.getElementById('question2Menu').style.borderRadius = '5px 5px 5px 5px';
}
function question2Out(){
    document.getElementById('question2Menu').style.fontSize = '1em';
    document.getElementById('question2Menu').style.backgroundColor = 'rgb(0,156,221)';
    document.getElementById('question2Menu').style.borderRadius = '0';
}
function question3Over(){
    document.getElementById('question3Menu').style.fontSize = '1.2em';
    document.getElementById('question3Menu').style.backgroundColor = 'rgb(0,74,117)';
    document.getElementById('question3Menu').style.borderRadius = '5px 5px 5px 5px';
}
function question3Out(){
    document.getElementById('question3Menu').style.fontSize = '1em';
    document.getElementById('question3Menu').style.backgroundColor = 'rgb(0,156,221)';
    document.getElementById('question3Menu').style.borderRadius = '0';
}
function question4Over(){
    document.getElementById('question4Menu').style.fontSize = '1.2em';
    document.getElementById('question4Menu').style.backgroundColor = 'rgb(0,74,117)';
    document.getElementById('question4Menu').style.borderRadius = '5px 5px 5px 5px';
}
function question4Out(){
    document.getElementById('question4Menu').style.fontSize = '1em';
    document.getElementById('question4Menu').style.backgroundColor = 'rgb(0,156,221)';
    document.getElementById('question4Menu').style.borderRadius = '0';
}
function question5Over(){
    document.getElementById('question5Menu').style.fontSize = '1.2em';
    document.getElementById('question5Menu').style.backgroundColor = 'rgb(0,74,117)';
    document.getElementById('question5Menu').style.borderRadius = '5px 5px 5px 5px';
}
function question5Out(){
    document.getElementById('question5Menu').style.fontSize = '1em';
    document.getElementById('question5Menu').style.backgroundColor = 'rgb(0,156,221)';
    document.getElementById('question5Menu').style.borderRadius = '0';
}
function question6Over(){
    document.getElementById('question6Menu').style.fontSize = '1.2em';
    document.getElementById('question6Menu').style.backgroundColor = 'rgb(0,74,117)';
    document.getElementById('question6Menu').style.borderRadius = '5px 5px 5px 5px';
}
function question6Out(){
    document.getElementById('question6Menu').style.fontSize = '1em';
    document.getElementById('question6Menu').style.backgroundColor = 'rgb(0,156,221)';
    document.getElementById('question6Menu').style.borderRadius = '0';
}
function question7Over(){
    document.getElementById('question7Menu').style.fontSize = '1.2em';
    document.getElementById('question7Menu').style.backgroundColor = 'rgb(0,74,117)';
    document.getElementById('question7Menu').style.borderRadius = '5px 5px 5px 5px';
}
function question7Out(){
    document.getElementById('question7Menu').style.fontSize = '1em';
    document.getElementById('question7Menu').style.backgroundColor = 'rgb(0,156,221)';
    document.getElementById('question7Menu').style.borderRadius = '0';
}
function question8Over(){
    document.getElementById('question8Menu').style.fontSize = '1.2em';
    document.getElementById('question8Menu').style.backgroundColor = 'rgb(0,74,117)';
    document.getElementById('question8Menu').style.borderRadius = '5px 5px 5px 5px';
}
function question8Out(){
    document.getElementById('question8Menu').style.fontSize = '1em';
    document.getElementById('question8Menu').style.backgroundColor = 'rgb(0,156,221)';
    document.getElementById('question8Menu').style.borderRadius = '0';
}
function question9Over(){
    document.getElementById('question9Menu').style.fontSize = '1.2em';
    document.getElementById('question9Menu').style.backgroundColor = 'rgb(0,74,117)';
    document.getElementById('question9Menu').style.borderRadius = '5px 5px 5px 5px';
}
function question9Out(){
    document.getElementById('question9Menu').style.fontSize = '1em';
    document.getElementById('question9Menu').style.backgroundColor = 'rgb(0,156,221)';
    document.getElementById('question9Menu').style.borderRadius = '0 5px 5px 0';
}