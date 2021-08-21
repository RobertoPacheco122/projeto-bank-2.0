import { Cliente } from "./Cliente/Cliente.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { ContaSalario } from "./Contas/ContaSalario.js";


const cliente1 = new Cliente('André', 19034175634)
const contaCorrente1 = new ContaCorrente(0, cliente1, 1001)


const cliente2 = new Cliente('Ronaldo', 45091345791)
const contaPoupanca1 = new ContaPoupanca(0, cliente2, 1002)


const cliente3 = new Cliente('Rafael', 91234186181)
const contaSalario1 = new ContaSalario(0, cliente3, 1003)


contaCorrente1.depositar(100)
contaPoupanca1.depositar(100)
contaSalario1.depositar(100)

contaCorrente1.sacar(10)
contaPoupanca1.sacar(10)
contaSalario1.sacar(10)

console.log(contaCorrente1)
console.log(contaPoupanca1)
console.log(contaSalario1)

