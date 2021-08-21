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


contaCorrente1.depositar(300)
contaPoupanca1.depositar(600)
contaSalario1.depositar(900)

contaCorrente1.sacar(150)
contaPoupanca1.sacar(100)
contaSalario1.sacar(100)

contaCorrente1.transferir(50, contaPoupanca1)
contaPoupanca1.transferir(50, contaSalario1)
contaSalario1.transferir(50, contaCorrente1)


console.log(contaCorrente1)
console.log(contaPoupanca1)
console.log(contaSalario1)

