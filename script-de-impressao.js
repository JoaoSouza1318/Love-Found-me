

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
    import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBXQT-maFl-WajyLXE0JcY5XItkfwSKH1c",
    authDomain: "love-found-me-a6c2a.firebaseapp.com",
    projectId: "love-found-me-a6c2a",
    storageBucket: "love-found-me-a6c2a.firebasestorage.app",
    messagingSenderId: "312759140695",
    appId: "1:312759140695:web:601495647fb1df98c27e12"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

  let salvar = document.getElementById('salvar');

  let escrever = async () => {
        
        let tema = document.getElemenyId('tema').value;
 
        let conteudo = document.getElementById('conteudo').value;
 
        if(tema !== "" && conteudo !== ""){
             try {
          await setDoc(doc(db, "pregacoes", "ultima_palavra"), {
            tema: tema,
            conteudo: conteudo,
          });
          location.href = 'Palavra.html';
          alert("Palavra adicionada com sucesso !");
          document.getElementById('tema').value = "";
          document.getElementById('conteudo').value = "";
        } catch (e) {
          console.error("Erro ao salvar:", e);
          alert("Erro ao salvar no banco.");
        }
      } else {
        alert("Preencha todos os campos!");
        }
};

salvar.addEventListener('click', escrever, alert("Salvo")); 