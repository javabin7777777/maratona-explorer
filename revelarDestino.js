const respostas=["sim.","não.","provávelmente.","pode ser.","Certeza!",
"Não tenho tanta certeza.",
"É decididamente assim.",
"Não conte com isso.",
"Sem dúvidas!",
"Pergunte novamente mais tarde.",
"Sim, definitivamente!",
"Minha resposta é não.",
"Você pode contar com isso.",
"Melhor não te dizer agora.",
"A meu ver, sim.",
"Minhas fontes dizem não.",
"Provavelmente.",
"Não é possível prever agora.",
"Perspectiva boa.",
"As perspectivas não são tão boas.",
"Sim.",
"Concentre-se e pergunte novamente.",
"Sinais apontam que sim."]   // array com as respostas possíveis

function perguntar(){   // esta função é executada ao clicar no botão "fazer pergunta"
    const elementH3=document.querySelector("#resposta")   
    const campoTexto=document.querySelector("#input")
    elementH3.style.opacity = 1
    if(campoTexto.value == ""){  // emite um alerta na tela caso o campo pergunta esteja vazio
        window.alert("Digite algo no campo pergunta")
        return
    }     
    elementH3.innerHTML = "<div>"+campoTexto.value+"</div>" + respostas[Math.floor(Math.random()*respostas.length)]
    campoTexto.value="" 
    campoTexto.setAttribute("disabled",true)
    button.setAttribute("disabled",true)          
    setTimeout(function(){ // despois de 5000ms coloca a opacidade do elemento <h3> para zero
        elementH3.style.opacity = 0              
    },5000)
    setInterval(function(){  // executa a função no intervalo de 8000ms
        campoTexto.removeAttribute("disabled") 
        button.removeAttribute("disabled") 
        elementH3.innerHTML="" 
    },8000)  
}

