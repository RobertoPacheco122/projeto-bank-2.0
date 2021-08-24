import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./Autenticacao/SistemaAutenticacao.js";

const diretor1 = new Diretor('Carla', 7000, 15748234176)

const gerente1 = new Gerente('Ana', 5000, 92354178603)

diretor1.cadastrarSenha('345')
gerente1.cadastrarSenha('789')

console.log(diretor1)
console.log(gerente1)

const estaLogado1 = SistemaAutenticacao.login(diretor1, '123')
const estaLogado2 = SistemaAutenticacao.login(gerente1, '789')

console.log(estaLogado1)
console.log(estaLogado2)