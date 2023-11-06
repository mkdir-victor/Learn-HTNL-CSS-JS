
class NumeroAleatorio{

    constructor() {
        this.counter = 1
        this.numero = Math.floor(Math.random()*3 + 1 )
    }

    Verificacao(){
        let numeropego = parseInt(document.getElementById("input_num").value)
        if (this.numero != numeropego){
            return false
        }else {
            return true
        }
    }

    Acao(){
        let verificacao = this.Verificacao()

        if(verificacao == false){
            if(this.counter >= 5){
                document.getElementById("result").innerText = "FIM"
                document.getElementById("quant").innerText = ""
            }else {
                document.getElementById("result").innerText = "ERROUUU !!!"
                document.getElementById("quant").innerText = "Voce tem mais "+(5-this.counter)+" tentativa"
                this.counter++
            }

        }else{
            if(this.counter >= 5){
                document.getElementById("result").innerText = "FIM"
            }else{
                document.getElementById("result").innerText = "ACERTOU !!!"
                document.getElementById("quant").innerText = ""
                this.counter = 5
            }

        }

    }

}

let Numero = new NumeroAleatorio()