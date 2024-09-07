<h1 align="center">
  API em Java com Spring Boot para consumir dados do formulário e fazer autenticação de usuário
</h1>

API para consumo de dados de um formulário de contato. A API permite que usuários enviem mensagens de contato preenchendo um formulário com os campos: nome, telefone, e-mail e mensagem. Os dados são validados e armazenados no banco de dados. Além disso, um e-mail de confirmação é enviado para o endereço de e-mail fornecido pelo usuário, confirmando o recebimento da mensagem de contato. Além disso, a API possui um sistema de segurança para proteger os dados dos usuários usando Spring Security.

## Tecnologias

-   [Spring Boot](https://spring.io/projects/spring-boot)
-   [Spring Dev Tools](https://spring.io/tools)
-   [Spring Data JPA](https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html#jpa.query-methods.at-query)
-   [H2 Database](https://docs.spring.io/spring-framework/)
-   [Postgresql](https://www.postgresql.org/)
-   [Java Mail Sender](https://docs.spring.io/spring-framework/)
-   [Spring Security](https://spring.io/guides/gs/securing-web)
-   [JWT Token](https://jwt.io/)

## Rules

[✅] Permitir que usuários enviem mensagens de contato preenchendo um formulário com os campos: nome, telefone, e-mail e mensagem.

[✅] Validar os dados enviados pelo usuário, garantindo que todos os campos obrigatórios estão preenchidos e que o e-mail e telefone seguem o formato correto.

[✅] Armazenar os dados de contato no banco de dados de forma segura, assegurando a integridade e privacidade das informações.

[✅] Enviar um e-mail de confirmação para o endereço de e-mail fornecido pelo usuário, confirmando o recebimento da mensagem de contato.

[✅] Retornar uma resposta apropriada (sucesso ou erro) dependendo da validação e processamento dos dados enviados pelo usuário.

[✅] Implementar um sistema de segurança para proteger os dados dos usuários, garantindo que apenas usuários autorizados possam acessar as informações do dashboard.

## Práticas adotadas

-   SOLID
-   Uso de DTOs para a API
-   Injeção de Dependências
-   Auditoria sobre criação e atualização da entidade
-   Segurança com Spring Security

## Como Executar

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

A API poderá ser acessada em [localhost:8081](http://localhost:8081).

-   Clonar repositório git
-   Construir o projeto:

## API Endpoints

-   POST /api/contato

```
http POST :8081/api/contato

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

-   POST /api/contato

```
http POST :8081/api/login

HTTP/1.1 200 OK
Content-Length: 129
Content-Type: application/json


{
    "name": "Rodrigo",
    "senha": "123"
}
```
