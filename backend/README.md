<h1 align="center">
  Form API
</h1>


API para cadastro de formulários via REST.


## Práticas adotadas

- Model View Controller
- Consultas ao Banco de Dados
- Uso de DTOs para a API
- Injeção de Dependências
- Auditoria sobre criação e atualização da entidade

## Como Executar

### Localmente
- Clonar repositório git
- Construir o projeto:
```
 git clone "URL do projeto"
```
- Executar:
```
python server.py
```

A API poderá ser acessada em [localhost:8081](http://localhost:8081).


## API Endpoints


```
http POST :8081/form-user

```

- POST /form-user
```
http POST :8081

HTTP/1.1 200 OK
Content-Length: 129
Content-Type: application/json

{
    "name": "Rodrigo",
    "email": "rodrigo@gmail.com",
    "number": "4002-8922",
    "message": "whats'up",
}
```