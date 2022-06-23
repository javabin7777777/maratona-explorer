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
const elementH3=document.querySelector("#resposta") // o conteúdo do elemento <h3> será a resposta mais a pergunta  
const campoTexto=document.querySelector("#input") // aqui fica a pergunta inserida pelo usuário
const elementDiv=document.querySelector("#cronometro") // aqui fica o cronômetro de contagem decrescente

function perguntar(){   // esta função é executada ao clicar no botão "fazer pergunta",e imprimi na tela a resposta e a pergunta            
    elementH3.style.opacity = 1
    if(campoTexto.value == ""){  // emite um alerta na tela caso o campo pergunta esteja vazio
        window.alert("Digite algo no campo pergunta")
        return
    }
    if(campoTexto !=""){
        cronometro()
        setTimeout(function(){   // é executada após o término do cronômetro                  
            elementH3.innerHTML = "<div>"+campoTexto.value+"</div>" + respostas[Math.floor(Math.random()*respostas.length)] // insere a resposta e a pergunta no elemento <h3>
            campoTexto.value="" 
            campoTexto.setAttribute("disabled",true)
            button.setAttribute("disabled",true)          
            setTimeout(function(){ // depois de 5000ms coloca a opacidade do elemento <h3> para zero
                elementH3.style.opacity = 0              
            },5000)
            setInterval(function(){// executa a função no intervalo de 8000ms,liberando os elementos campotexto e button,e,apaga o contéudo do elemento <h3>(resposta e a pergunta)
                campoTexto.removeAttribute("disabled") 
                button.removeAttribute("disabled") 
                elementH3.innerHTML="" 
            },8000)
            elementDiv.innerHTML=""

        },7000)            
    } 
}

function cronometro(){   
    var tempo=5
    elementDiv.style.opacity=1
    var id=setInterval(function(){  // faz a contagem decrescente do cronômetro       
            elementDiv.innerHTML = tempo
            --tempo
            if(tempo==0){ // para a função setInterval e cronômetro desaparece da tela 
                clearInterval(id) 
                elementDiv.style.opacity=0
            }
    },1000)    
}

