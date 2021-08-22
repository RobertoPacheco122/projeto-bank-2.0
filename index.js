import { Cliente } from "./Cliente/Cliente.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { ContaSalario } from "./Contas/ContaSalario.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";


const diretor1 = new Diretor('Carla', 7000, 15748234176)

const gerente1 = new Gerente('Ana', 5000, 92354178603)

console.log(diretor1)
console.log(gerente1)