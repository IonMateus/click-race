let tecla1, tecla2, tempo
let jogador1 = "Jogador 1"
let jogador2 = "Jogador 2"

window.onload = function() {
    EstadoStart()
  };
  
function EstadoGame(){
    document.getElementById("divGame").style.display = "block";
    document.getElementById("divBtnStart").style.display = "none";
}

function EstadoStart(){
    document.getElementById("divGame").style.display = "none";
    document.getElementById("divBtnStart").style.display = "block";
}

function definirTecla1(){
tecla1 = window.prompt("Defina uma letra ou número que "+jogador1+" usará.")
if(tecla1 != null){return true}
}

function definirTecla2(){
    tecla2 = window.prompt("Defina uma letra ou número que "+jogador2+" usará.")
    if(tecla2 != null && tecla2 != tecla1){return true}
}

function mudarNomes(){
    jogador1 = window.prompt("Digite o novo nome de "+jogador1)
    jogador2 = window.prompt("Digite o novo nome de "+jogador2)
    document.getElementById("textJ1").innerHTML = jogador1;
    document.getElementById("textJ2").innerHTML = jogador2;
}

function Jogar(){

    tempo = window.prompt("Quantos cliques serão necessários para vencer?")
    if (definirTecla1() == true && definirTecla2() == true && tecla1.charAt(0) && tecla2.charAt(0)){
        
        alert("Clique em [Enter] que já vai estar valendo!")

        let score1 = 0;
        let score2 = 0;
        let vencedor = "";
        let perdedor = "";
        let estado = 1
        let vezesMaisRapido = 0.000

        document.getElementById('teclaUtilizada1').innerText = "Tecla '"+ tecla1 +"'";
        document.getElementById('teclaUtilizada2').innerText = "Tecla '"+ tecla2 +"'";
        document.getElementById('tempo').innerText = "Cliques para vencer: "+ tempo ;

        document.getElementById('score1').innerText = score1;
        document.getElementById('score2').innerText = score2;

        document.addEventListener('keyup', function(event) {
        if (event.key === tecla1 && estado == 1) {  
            score1++;
            document.getElementById('score1').innerText = score1;
        }

        if (event.key === tecla2  && estado == 1) {  
            score2++;
            document.getElementById('score2').innerText = score2;
        }

        if(score1 > tempo|| score2 > tempo){
            if(score1 >tempo){
                vencedor = jogador1
                perdedor = jogador2
                vezesMaisRapido = score1/score2
            }
            if(score2 > tempo){
                vencedor = jogador2
                perdedor = jogador1
                vezesMaisRapido = score2/score1
            }
            alert("Quem venceu foi: "+ vencedor+", clicando "+vezesMaisRapido+"x mais rápido que "+perdedor+". Parabéns!!!")
            score1 = 0
            score2 = 0
            estado = 0
        }
        });

    } else{
        alert("Não definiu as teclas de pontuação corretamente.")
        console.log(tecla1,tecla2)
    }


}
