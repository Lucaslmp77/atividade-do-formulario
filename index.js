var formulario = document.getElementById("formulario");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordConfirmation = document.getElementById("passworConfirmation");

document.getElementById("botao").disabled = true;

username.addEventListener("blur", function() {
    if(username.value === "") {
        addErro(username, "Insira um nome de usuário");
        document.getElementById("botao").disabled = true;
    }else if(username.value.length < 3) {
        addErro(username, "Usuário deve ter no minímo 3 caracteres");
        document.getElementById("botao").disabled = true;
    }else if(username.value.length > 24) {
        addErro(username, "Usuário não deve exceder 24 caracteres");
        document.getElementById("botao").disabled = true;
    }else{
        addSucesso(username);
    }
})

/* ==============FUNÇÃO QUE VERIFICA SE O EMAIL POSSUI O FORMATO IDEAL============== */
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

email.addEventListener("blur", function() {
    if(email.value === "") {
        addErro(email, "Insira um email");
        document.getElementById("botao").disabled = true;
    }else if (!checkEmail(email.value)) {
        addErro(email, "O email não é válido.");
        document.getElementById("botao").disabled = true;
    }else{
        addSucesso(email);
    }
})

password.addEventListener("blur", function() {
    if(password.value === "") {
        addErro(password, "Insira uma senha");
        document.getElementById("botao").disabled = true;
    }else if (password.value.length < 8) {
        addErro(password, "A senha precisa ter no mínimo 8 caracteres.");
        document.getElementById("botao").disabled = true;
    }
    else{
        addSucesso(password);
    }
})

passwordConfirmation.addEventListener("blur", function() {
    if(passwordConfirmation.value === "") {
        addErro(passwordConfirmation, "Confirme a senha");
        document.getElementById("botao").disabled = true;
    }else if (passwordConfirmation.value !== password.value) {
        addErro(passwordConfirmation, "As senhas não são iguais.");
        document.getElementById("botao").disabled = true;
    }else if (passwordConfirmation.value.length < 8 || passwordConfirmation.value.length > 24) {
        addErro(passwordConfirmation, "As senhas não são iguais.");
        document.getElementById("botao").disabled = true;
    }
    else{
        addSucesso(passwordConfirmation);
        document.getElementById("botao").disabled = false;
    }
})

/* ==============ADD ERRO============== */
function addErro(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    formControl.className = "caixaForm error";
}

/* ==============ADD SUCESSO============== */
function addSucesso(input) {
    const formControl = input.parentElement;

    formControl.className = "caixaForm success";
}

/* ==============VERIFICAÇÃO DE USUÁRIO UNICO============== */
function salvarUser(){
    var listaUsers = [];
    var newUser = {};

    var newUser = {
        nome: username.value
    }

    if(listaUsers.indexOf(username.value) != -1){
        addErro(username, "Usuário já cadastrado");
    }else{
        listaUsers.push(newUser);
        newUser = {};
    }
}

/* =============DEBOUNCE============= */
const debounce = (fn, time) => {
    let debounceId = 0
    return () => {
        clearTimeout(debounceId)
        debounceId = setTimeout(fn, time)
    }
}

const mensagemDebounce = () => console.log('Aguarde 1 segundo')
const executaDebounce = debounce(mensagemDebounce, 1000)
executaDebounce();