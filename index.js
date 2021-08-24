import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./Autenticacao/SistemaAutenticacao.js";
import { Cliente } from "./Cliente/Cliente.js";

const diretor1 = new Diretor('Carla', 7000, 15748234176)
const gerente1 = new Gerente('Ana', 5000, 92354178603)
const cliente1 = new Cliente('Bruna', 17749351678, '456')
const cliente2 = new Cliente('Pascal', 98031853300, '111')


diretor1.cadastrarSenha('345')
gerente1.cadastrarSenha('789')

console.log(diretor1)
console.log(gerente1)

const estaLogado1 = SistemaAutenticacao.login(diretor1, '123')
const estaLogado2 = SistemaAutenticacao.login(gerente1, '789')
const estaLogado3 = SistemaAutenticacao.login(cliente1, '453')
const estaLogado4 = SistemaAutenticacao.login(cliente2, '111')


console.log(estaLogado1)
console.log(estaLogado2)
console.log(estaLogado3)
console.log(estaLogado4)
