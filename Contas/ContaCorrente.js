import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia)
    }
    
    //Taxa de 10% sobre
    sacar(valor){
        let taxa = 1.1
        return this._sacar(valor, taxa)
    }
}