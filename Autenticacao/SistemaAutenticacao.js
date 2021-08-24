export class SistemaAutenticacao{
    //Ser "autenticavel" significa ter o método "autenticar" dentro de si
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha)
    }
}