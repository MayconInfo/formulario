function pegarDados(){
    document.querySelector(".esconder").style.display = "block";

    let camMail = document.getElementById("e-mail").value;
    document.getElementById("campomail").innerHTML = ("Seu Email é: " + camMail);

    let camSenha = document.getElementById("password").value;
    document.getElementById("camposenha").innerHTML = ("Sua senha é: " + camSenha);

    let camText = document.getElementById("texto").value;
    document.getElementById("campotext").innerHTML = ("Seu nome é: " + camText);

    let camTel = document.getElementById("fone").value;
    document.getElementById("campotel").innerHTML = ("Seu número é: " + camTel);

    let camData = document.getElementById("data").value;
    document.getElementById("campodata").innerHTML = ("Data da inscrição: " + camData);

    let priFaixa = document.getElementById("PriFaixa").value;
    document.getElementById("campoescolas").innerHTML = ("Sua escola é: " + priFaixa);

    let camNum = document.getElementById("num").value;
    document.getElementById("camposerie").innerHTML =("Sua série é: " + camNum);

    if(document.getElementById("info").checked){
        document.getElementById("campocurso").innerHTML = ("Seu curso é: informática")
    }else if(document.getElementById("adm").checked){
        document.getElementById("campocurso").innerHTML = ("Seu curso é: administração")
    }else if(document.getElementById("enf").checked){
        document.getElementById("campocurso").innerHTML = ("Seu curso é: enfermagem")
    }

    let checkbox_pv = document.getElementById("pv");
    let checkbox_mt = document.getElementById("mt");
    let checkbox_eem = document.getElementById("eem");

    if (checkbox_pv.checked){
        document.getElementById("campo_pv").innerHTML = ("Matéria extracurricular: Projeto de  Vida")
    }  if (checkbox_mt.checked){
        document.getElementById("campo_mt").innerHTML = ("Matéria extracurricular: Mundo do Trabalho")
    } if (checkbox_eem.checked){
        document.getElementById("campo_eem").innerHTML = ("Matéria extracurricular: Empreendedorismo")
    }

    let camHora = document.getElementById("time").value;
    document.getElementById("campohora").innerHTML = ("O horário da inscrição: " + camHora);

    let camValor = document.getElementById("range").value;
    document.getElementById("campovalor").innerHTML = ("Taxa de inscrição: " + camValor);

    let camOculto = document.getElementById("oculto").value;
    document.getElementById("campooculto").innerHTML = ("Número do cadastro: " + camOculto);

}