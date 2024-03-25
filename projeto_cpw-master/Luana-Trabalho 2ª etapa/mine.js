$(document).ready(function(){//só funciona com o arquino jquery meask incluido na página
  $("#idcpf").mask("000.000.000-00")//permite apenas os numeros 
  $("#tel").mask("(00) 00000-0000")
  })
 
  //evento criado para mapear o que está sendo digitado no input
const inputName = document.querySelector("#username");
console.log(inputName);
inputName.addEventListener("keypress", function (e) {//evento keypress detecta a tecla pressionada

  const keyCode = (e.keyCode ? e.keyCode : e.wich);//keyCode mapeia o botão pressionado
  if (keyCode > 47 && keyCode < 58) {//são valores que corespondem aos numeros
    e.preventDefault();//encerra o evento do input caso seja um número
  }
});

(function (win, doc) {
  'use strict';
  let msg = doc.querySelector('#msg');
  msg.addEventListener('keyup', (event) => {//keyup representa quando a tecla do usuário subir 

    let sub = event.target.maxLength - event.target.textLength;//cada vez que digita ele diminui
    doc.querySelector('.result').innerHTML = `Máximo de caracteres:${sub}`;//chama um template literal e mostra o valor da variável sub

  }, false);
})(window, document);

const formulario = document.getElementById('formulario')//faz referência para selecionar os elementos 
const username = document.getElementById('username')
const idcpf = document.getElementById('idcpf')
const endereco = document.getElementById('endereco')
const email = document.getElementById('email')
const msg = document.getElementById('msg')

formulario.addEventListener('submit', (e) => { //evento de enviar 
  e.preventDefault() //cancela o comportamento padrão do formulário mantendo os dados na tela

  checkInputs()//executa a função 
})
function checkInputs() {//cria a função para a validação

  const usernameValue = username.value.trim() //acessa os valores que estão dentro dos inputs 
  const idcpfValue = idcpf.value.trim() //trim() função do javascript que remove todos os espaços em branco
  const enderecoValue = endereco.value.trim()
  const emailValue = email.value.trim()
  const msgValue = msg.value.trim()
  const telValue= tel.value.trim()

  var sucesso = true;

  if (idcpfValue == '') {//verifica se os campos estão vazios
    errorValidation(idcpf, 'Preencha esse campo')  //dois parametros, primeiro chama o input e depois mostra a  mensagm
    sucesso = false;
  }
  else {
    successValidation(idcpf)

    sucesso = true;
  }
  if (usernameValue == '') {
    errorValidation(username, 'Preencha esse campo')
    sucesso = false;
  }
  else {
    successValidation(username)
    sucesso = true;
  }
  if (enderecoValue == '') {
    errorValidation(endereco, 'Preencha esse campo')
    sucesso = false;
  }
  else {
    successValidation(endereco)
    sucesso = true;
  }
  if (emailValue== '') {
    errorValidation(email, 'Preencha esse campo')
    sucesso = false;
  }
  else {
    successValidation(email)
    sucesso = true;
  }
  if (msgValue== '') {
    errorValidation(msg, 'Preencha esse campo')
    sucesso = false;
  }
  else {
    successValidation(msg)
    sucesso = true;
  }
  if (telValue== '') {
    errorValidation(tel, 'Preencha esse campo')
    sucesso = false;
  }
  else {
    successValidation(tel)
    sucesso = true;
  }

  if(sucesso == true){

    alert("Clique em OK para confirmar o envio os dados!");
  }
}

  function errorValidation(input, message) {//função que recebe os parâmetros dos inputs
    const formControl = input.parentElement;// metodo que retorna uma referência direta do elemento pai
    const small = formControl.querySelector('small')//pega o conteúdo do small da div formcontrol
    small.innerText = message//passa a mensagem de parâmetro preencha esse campo
    formControl.className = 'formcontrol error'//reatribui a class formcontrol do html para receber formcontrol error deixando o input vermelho
  }
  function successValidation(input) {
    const formControl = input.parentElement;
    formControl.className = 'formcontrol success'
  }
