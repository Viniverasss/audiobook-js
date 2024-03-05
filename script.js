const botaoPlayPause = document.getElementById('play-pause');
const botaoAnterior = document.getElementById('anterior');
const botaoProximo = document.getElementById('proximo');
const audioCapitulo = document.getElementById('audio-capitulo');
const nomeCapitulo = document.getElementById('capitulo');

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
} // Função de tocar a faixa

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
} //  Função de pausar a Faixa

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
} //Função de alternar entre o Play e o Pause

function trocarNomeFaixa() {
    nomeCapitulo.innerText = 'Capitulo ' + capituloAtual
} //Troca o numero da faixa


function proximaFaixa() {
        if ( capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
        } else {
        capituloAtual = capituloAtual + 1;
        }
    
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual +".mp3";
    tocarFaixa();
    trocarNomeFaixa();
} // Função de trocar para a proxixma faixa

function retornarFaixa() {
    if ( capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
        } else {
        capituloAtual = capituloAtual - 1;
        }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual +".mp3";
    tocarFaixa();
    trocarNomeFaixa();
} // Função de trocar para a faixa anterior

botaoPlayPause.addEventListener('click', tocarOuPausar); //Fazer o botão de play executar a Função de play ou pause quando clicando
botaoProximo.addEventListener('click', proximaFaixa); // Fazer o botão de Proxima executar a função de passar para a proxima faixa
botaoAnterior.addEventListener('click', retornarFaixa); // Fazer o botão de Anterior executar a função de passar para a faixa anterior