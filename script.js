const botoes = document.getElementsByTagName("button");
const texto = document.getElementById("cor-atual");
console.log(texto.innerText);
const cores = ["#D94E33","#2C5697","#ED9B33", "#8A9B8E", "#DDE5ED"];

for (let i = 0; i < botoes.length; i++){
    botoes[i].addEventListener("click",function(){
        console.log(botoes.length);
        texto.innerText=`Cor ${cores[i]}`;
        document.body.style.background = cores[i];
    })
}