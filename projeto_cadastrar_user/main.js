class Cadastro{

    constructor(){
        this.lista = [];
        this.id = 0;
    }
    
    verificarEmailRepetido(email) {
        return this.lista.some(item => item.email === email);
    }
    
    getInformacao(){
        let email = document.getElementById('email').value;
        let senha = document.getElementById('senha').value
        let verificador = this.verificarEmailRepetido(email);
        
        

        if(verificador == true){
            alert('Email já está cadastrado');
        } else if(senha === ""){
            alert("digite a senah")
        } else {
            let mylist = {
                id: this.id,
                email: email,
                senha: senha
            };
            this.lista.push(mylist);
            alert("Cadastro realizado com sucesso");
            document.getElementById('email').value = ""
            document.getElementById('senha').value = ""
            this.id++; 
            this.viewEmail()
        }
    }



    viewEmail(){

        let tbody = document.getElementById("view");
        tbody.innerText = "";
        for (let i = 0; i < this.lista.length; i++) {
          let tr = tbody.insertRow();
    
          let td_id = tr.insertCell();
          let td_email = tr.insertCell();
          let td_acao = tr.insertCell();
    
          td_id.innerText = this.lista[i].id;
          td_email.innerText = this.lista[i].email;

          // inserir a imagem de excluir e criar a açao
          let excluirimg = document.createElement('img')
          excluirimg.src = "img/delete.png"
          excluirimg.style.width = "20px"
          excluirimg.style.height = "20px"
          excluirimg.style.margin = "auto"
          excluirimg.setAttribute(
            "onclick",
            "cadastro.remover(" + this.lista[i].id + ")"
          )

          td_acao.appendChild(excluirimg)
          
          // inserir imagem de iditar e criar a açao
          let editar = document.createElement('img')
          editar.src = "img/edit.png"
          editar.style.width = "20px"
          editar.style.height = "20px"
          editar.style.margin = "auto"
          editar.setAttribute(
            "onclick",
            "cadastro.editar(" + this.lista[i].id + ")"
          )

          td_acao.appendChild(editar)
        }
    }

    remover(id){
        let tbody = document.getElementById("view");
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].id == id) {
                
                let confirm = prompt("digite a senha do email")
        
                if(this.lista[i].senha === confirm){
                
                    this.lista.splice(i, 1);
                    console.log(this.lista);
                    tbody.deleteRow(i);
                    alert("email excluido com sucesso !")  
                }else{
                    alert("senha incorreto")
                }
            }
        }
    }

    editar(id){
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].id == id) {
                
                let novo_senha = prompt("digite a nova senha")
                this.lista[i].senha = novo_senha
                alert("troca de senha com sucesso !")
            }
        }
    }
}    



let cadastro = new Cadastro()
