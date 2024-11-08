<h1 align="center">
  API em Java com Spring Boot para consumir dados do formulário e fazer autenticação de usuário com JWT para acesso ao sistema
</h1>

API para consumo de dados de um formulário de contato. A API permite que usuários enviem mensagens de contato preenchendo um formulário com os campos: nome, telefone, e-mail e mensagem. Os dados são validados e armazenados no banco de dados. Além disso, um e-mail de confirmação é enviado para o endereço de e-mail fornecido pelo usuário, confirmando o recebimento da mensagem de contato. Ademais, a API possui um sistema de segurança para autenticar os usuários para o acesso ao dashboard usando Spring Security para ter acesso ao sistema.

## Tecnologias

-   [Spring Boot](https://spring.io/projects/spring-boot)
-   [Spring Dev Tools](https://spring.io/tools)
-   [Spring Data JPA](https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html#jpa.query-methods.at-query)
-   [H2 Database](https://docs.spring.io/spring-framework/)
-   [Postgresql](https://www.postgresql.org/)
-   [Java Mail Sender](https://docs.spring.io/spring-framework/)
-   [Spring Security](https://spring.io/guides/gs/securing-web)
-   [JWT Token](https://jwt.io/)
-   [Docker](https://www.docker.com/)

## Rules

[✅] Permitir que usuários enviem mensagens de contato preenchendo um formulário com os campos: nome, telefone, e-mail e mensagem.

[✅] Validar os dados enviados pelo usuário, garantindo que todos os campos obrigatórios estão preenchidos e que o e-mail e telefone seguem o formato correto.

[✅] Armazenar os dados de contato no banco de dados de forma segura, assegurando a integridade e privacidade das informações.

[✅] Enviar um e-mail de confirmação para o endereço de e-mail fornecido pelo usuário, confirmando o recebimento da mensagem de contato.

[✅] Retornar uma resposta apropriada (sucesso ou erro) dependendo da validação e processamento dos dados enviados pelo usuário.

[✅] Implementar um sistema de segurança para proteger os dados dos usuários, garantindo que apenas usuários autorizados possam acessar as informações do dashboard.

[✅] A senha do usuário deve ser criptografada antes de ser armazenada no banco de dados, garantindo a segurança dos dados.

[✅] Implementar um sistema de autenticação baseado em tokens JWT (JSON Web Tokens) para proteger as rotas do dashboard.

[✅] Permitir que os usuários façam login no sistema usando um nome de usuário e senha válidos.

[✅] Retornar um token JWT válido para os usuários autenticados, permitindo que eles acessem as rotas protegidas do dashboard.

[✅] Resolver o erro de cors que ocorre ao tentar acessar a API de um domínio diferente.

[✅] Implementar testes automatizados para garantir a qualidade e integridade do código.

## Práticas adotadas

-   SOLID
-   Uso de DTOs para a API
-   Injeção de Dependências
-   Auditoria sobre criação e atualização da entidade
-   Segurança com Spring Security
-   JWT Token
-   Validação de dados com Bean Validation
-   Tratamento de exceções

## Como Executar

### Docker

```
docker-compose up -d
```

### Localmente

-   Clonar repositório git
-   Construir o projeto:

```
./mvnw clean package
```

-   Executar:

```
java -jar backend-java/target/backend-java-0.0.1-SNAPSHOT.jar
```

A API poderá ser acessada em [localhost:8080](http://localhost:8080).

-   Clonar repositório git
-   Construir o projeto:

## API Endpoints

-   POST /contato

```
http POST :8080/enviar

HTTP/1.1 200 OK
Content-Length: 129
Content-Type: application/json


{
    "name": "Rodrigo",
    "phone": "(84) 99999-9999",
    "email": "rodrigo@example.com",
    "message": "Gostaria de saber mais sobre seus serviços."
}
```

-   POST /usuarios

```
http POST :8080/usuarios

HTTP/1.1 200 OK
Content-Length: 129
Content-Type: application/json


{
    "login": "RodrigoTeste",
    "name": "Rodrigo",
    "senha": "123"
}
```


```
http POST :8080/login

HTTP/1.1 200 OK
Content-Length: 129
Content-Type: application/json


{
    "login": "RodrigoTeste",
    "senha": "123"
}
```

```
http POST :8080/reservas

HTTP/1.1 200 OK
Content-Length: 129
Content-Type: application/json


{
    "data": "2021-10-10",
    "morador": "rodrigo",
    "areaComum": "salao de festas"
}
```

```
http POST :8080/despesas

HTTP/1.1 200 OK
Content-Length: 129
Content-Type: application/json


{
    "data": "2021-10-10",
    "descricao": "pagamento de fornecedores",
    "valor": 1000
    "categoriaDespesa": "manutencao"
}
```


obs: a senha é criptografada antes de ser salva no banco de dados
