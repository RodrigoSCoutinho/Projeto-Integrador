class Usuario {
  String login;
  String senha;

  Usuario({
    this.login = '',
    this.senha = '',
  });

  Map<String, dynamic> toJson() => {
        'login': login,
        'senha': senha,
      };
}
