class Cadastro{

    constructor(){
        this.lista = []
        this.id = 0
    }

    getDado(){
        this.id = this.id + 1
        let mylist = {}
        mylist.id = this.id
        mylist.nome = document.getElementById('nome_pessoa').value
        mylist.idade = document.getElementById('idade').value

        this.lista.push(mylist)
        console.log(mylist)

    }

    setDado(){
        console.log(this.lista)
    }
}

let cadastro = new Cadastro()