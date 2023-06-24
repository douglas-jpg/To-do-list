const todasTarefas = document.querySelector('.all-tasks');
const bttEnviar = document.querySelector('.send-task');

const inputTexto = document.querySelector('.input-task');
const inputData = document.querySelector('.input-date');
const inputSelect = document.querySelector('.tag');
const inputHigh = document.querySelector('.high');
const inputMedium = document.querySelector('.medium');
const inputLow = document.querySelector('.low');

const lapis = '<img src="assets/svg/edit.svg" alt="button to edit">';
const lixeira = '<img src="assets/svg/trash-2.svg" alt="button to delet"></img>';


// Criando elemento
function criarElemento (tag, nomeClasse) {
    const elemento = document.createElement(tag);
    elemento.className = nomeClasse;
    return elemento;
};

// Criando caixa de marcar
function setCaixa (tag, div) {
    const elemento = document.createElement(tag);
    elemento.type = 'checkbox';
    div.appendChild(elemento);
};

// pegando e formatando a data
function setData (data, div) {
    const date = criarElemento('div', 'date-task');
    valor = data.value;
    valorData = new Date(valor);
    let mes = (valorData.getMonth() + 1).toString().padStart(2, '0');
    let dia = valorData.getDate().toString().padStart(2, '0');
    let dataFormatada = `${dia}/${mes}`;
    date.innerHTML = dataFormatada;
    div.appendChild(date);
};

// Criar botões e colocar na div
function setBttm(nomeClasse, conteudo, div){
    const btm = criarElemento('button', nomeClasse);
    btm.innerHTML = conteudo;
    div.appendChild(btm);
};

// Criar outros textos na tarefa
function createDiv (tag, nomeClass, div, input) {
    const elem = criarElemento(tag, nomeClass);
    elem.innerHTML = input.value;
    div.appendChild(elem);
};

function checarPrioridade(div){
    if (inputHigh.checked){
        let prioridade = criarElemento('div', 'priority p-high');
        div.appendChild(prioridade);
    } else if (inputMedium.checked){
        let prioridade = criarElemento('div', 'priority p-medium');
        div.appendChild(prioridade);
    } else if (inputLow.checked){
        let prioridade = criarElemento('div', 'priority p-low');
        div.appendChild(prioridade);
    }
};

// data de hoje
dataHoje = () => {
    const dataAtual = document.querySelector('.new-date');
    let data = new Date();
    let dia = data.getDate();
    let mes = (data.getMonth() + 1).toString().padStart(2, '0');
    let ano = data.getFullYear();
    dataAtual.innerHTML = `${dia}/${mes}/${ano}`;
};

// quando enviar a tarefa
bttEnviar.onclick = () => {
    const tarefa = criarElemento('div', 'task');
    setCaixa('input', tarefa);
    createDiv('div', 'text-task', tarefa, inputTexto);
    setData(inputData, tarefa);
    createDiv('div', 'bookmark', tarefa, inputSelect);
    checarPrioridade(tarefa);
    setBttm('edit', lapis, tarefa);
    setBttm('delet', lixeira, tarefa);
    todasTarefas.appendChild(tarefa);
};

dataHoje();
