   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
    import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA06N8YExeX7Vt7y2yaIPV3DgOi62hhBEQ",
  authDomain: "love-found-me.firebaseapp.com",
  projectId: "love-found-me",
  storageBucket: "love-found-me.firebasestorage.app",
  messagingSenderId: "196735722095",
  appId: "1:196735722095:web:4897eb31a71ca3b609a39a",
  measurementId: "G-HQEWTMDDMP"
};


   const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

  window.escrever = async function() {
        
        let tema = document.getElementById('tema').value;
 
        let conteudo = document.getElementById('conteudo').value;
 
        if(tema !== "" && conteudo !== ""){
             try {
          await setDoc(doc(db, "pregacoes", "ultima_palavra"), {
            tema: tema,
            conteudo: conteudo,
            atualizadoEm: new Date().toISOString()
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