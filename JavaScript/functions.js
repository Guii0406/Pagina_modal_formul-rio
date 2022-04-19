let btn = document.getElementById('btn');
let modal = document.getElementById('modal');
let close = document.getElementById('close');
let out = document.getElementById('modal-out');
let menu = document.getElementById('menu');

btn.onclick = function(){
    modal.style.display = "flex";
    menu.style.display = "none";
    nome.focus();
}

close.onclick = function(){
    modal.style.display = "none";
    menu.style.display = "flex";
    document.getElementById('form-modal').reset();
}

out.onclick = function(){
    modal.style.display = "none";
    menu.style.display = "flex";
    document.getElementById('form-modal').reset();
}

function errors(){
    let numeros = "1234567890";

    if(!nome.value || 0 === nome.value.length){
        alert('Campo do nome vazio');
        nome.focus();
        return false;
    }
    let invalidoNome = true;

    for(let i = 0; i < nome.value.length; i++){
        if(numeros.indexOf(nome.value.charAt(i)) > 1){
            invalidoNome = false;
            break;
        }
    }
    if(!invalidoNome){
        alert('nome inválido!!');
        return false;
    }

    if(!email.value || 0 === email.value.length){
        alert('Campo do email vazio');
        email.focus();
        return false;
    }

    if(email.value.indexOf('@', 0) == -1){
        alert('email inválido');
        email.focus();
        return false;
    }
    let invalidoTelefone = true;

    for(let i = 0; i < telefone.value.length; i++){
        if(numeros.indexOf(telefone.value.charAt(i)) == -1){
            invalidoTelefone = false;
            break;
        }
    }
    if(!invalidoTelefone || telefone.value.length < 8){
        alert('telefone inválido!!');
        return false;
    }


    if(!telefone.value || 0 === telefone.value.length){
        alert('Campo do telefone vazio');
        telefone.focus();
        return false;
    }

    if(!idade.value || 0 === idade.value.length){
        alert('Campo da idade vazio');
        idade.focus();
        return false;
    }

    let idadee = Number(document.getElementById('idade').value);
    let invalidoIdade = true;
    
    for(let i = 0; i < idade.value.length; i++){
        if(numeros.indexOf(idade.value.charAt(i)) == -1){
            invalidoIdade = false;
            break;
        }
    }
    if(!invalidoIdade){
        alert('idade inválida!!');
        return false;
    }
    
    if(idadee < 16){
        alert('Sinto muito, você precisa ter no minimo 16 anos para participar...')
        idade.focus();
        return false;
    }

    if(projetos.value == "selecionar"){
        alert('Selecione um projeto');
        return false;
    }

    alert("formulário enviado!!")
}
