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
          
          let excluirimg = document.createElement('img')
          excluirimg.src = "delete.png"
          excluirimg.style.width = "20px"
          excluirimg.style.height = "20px"
          excluirimg.style.margin = "autoA"
          excluirimg.setAttribute(
            "onclick",
            "email.excluir(" + this.lista[i].id + ")"
          )

          td_acao.appendChild(excluirimg)
    
        }

    }
}



let cadastro = new Cadastro()