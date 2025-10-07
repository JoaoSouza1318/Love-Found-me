function escrever() {
        
        let tema = document.getElementById('tema').value;
 
        let conteudo = document.getElementById('conteudo').value;
 
        if(tema !== "" && conteudo !== ""){ 
            localStorage.setItem('tema',  tema);
            localStorage.setItem('conteudo',  conteudo);
            location.href = 'Palavra.html';
           
        }
        else{
            impressao.innerHTML = alert("erro! preencha os campos corretamente");
        }
}