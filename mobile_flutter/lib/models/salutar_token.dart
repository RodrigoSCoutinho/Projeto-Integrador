// models/salutar_token.dart
class SalutarToken {
  final String token;

  SalutarToken({required this.token});

  factory SalutarToken.fromJson(Map<String, dynamic> json) {
    return SalutarToken(token: json['token']);
  }
}
