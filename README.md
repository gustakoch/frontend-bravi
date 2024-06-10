<p align="center">
<img src="https://bravi.com.br/app/themes/bravi/assets/img/logo-bravi.png" alt="Logo Bravi" width="200" />
</p>

# Frontend com Angular | Agenda de Contatos
Este projeto frontend foi desenvolvido utilizando o framework Angular.

### Funcionalidades disponíveis
- Cadastro de Pessoas: Permite adicionar novas pessoas à agenda de contatos, incluindo a obrigação de fornecer pelo menos um contato.
- Edição de Pessoas: Permite editar informações sobre uma pessoa existente na agenda.
- Remoção de Pessoas: Permite remover uma pessoa da agenda, juntamente com todos os seus contatos.
- Cadastro de Contatos: Permite adicionar novos contatos a uma pessoa existente na agenda.
- Edição de Contatos: Permite editar informações sobre um contato existente de uma pessoa na agenda.
- Remoção de Contatos: Permite remover um contato específico de uma pessoa na agenda.

### Regras de negócio aplicadas
- É obrigatório fornecer pelo menos um contato ao cadastrar uma nova pessoa.
- Ao remover o último contato de uma pessoa, essa pessoa é automaticamente removida do sistema.
- Não há limite para a quantidade de contatos que uma pessoa pode ter na agenda.

### Rodando o projeto localmente
1. Clone este repositório usando o comando `git clone` no seu terminal.
2. Após clonar o projeto, entre na pasta e execute o comando `npm install` para instalar todas as dependências necessárias.
3. Certifique-se de que o [backend Laravel](https://github.com/gustakoch/api-bravi) esteja rodando corretamente seguindo as instruções fornecidas no README do projeto.
4. Em seguida, execute o comando `ng serve` para iniciar o servidor de desenvolvimento do Angular.
5. Abra seu navegador e acesse `http://localhost:4200` para visualizar a aplicação frontend.
