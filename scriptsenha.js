     function validacao(){
        var senha = document.getElementById('senha').value;
    if (senha == "LFM24"){
            location.href = "mudanca-de-palavra.html";
    }
    else{
         alert("Preencha este campo corretamente");
    }
    }