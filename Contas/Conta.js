import { Cliente } from "../Cliente/Cliente.js"

//"Conta" é uma classe abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error('Essa é uma classe abstrata. Você não deve criar uma instância dela.')
        }
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }

    //Método abstrato
    sacar(valor){
        throw new Error('O método "sacar" da conta é abstrato. Você deve o sobrescrever e ao fim retornar o "sacar" privado passando o valor.')
    }

    _sacar(valor, taxa){
        const valorSacado = valor * taxa
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado
            return valorSacado
        }

        return 0
    }

    depositar(valor){
        if(valor <= 0){
            return
        }

        this._saldo += valor
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)   
    }
}

