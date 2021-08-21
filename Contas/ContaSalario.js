import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia)
    }
}