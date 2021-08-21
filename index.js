import { Cliente } from "./Cliente/Cliente.js";
import { Conta } from "./Contas/Conta.js";

const cliente1 = new Cliente('Fernando', 71734354901)

const conta1 = new Conta(0, cliente1, 1001)

console.log(cliente1)
console.log(conta1)