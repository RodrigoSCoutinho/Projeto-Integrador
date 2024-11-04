// services/login_service.dart
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

import '../models/salutar_token.dart';
import '../models/usuario.dart';

class LoginService {
  final String baseUrl = 'YOUR_API_BASE_URL'; // Replace with your API URL
  final storage = const FlutterSecureStorage();

  Future<SalutarToken> efetuarLogin(Usuario usuario) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/login'),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode(usuario.toJson()),
      );

      if (response.statusCode == 200) {
        return SalutarToken.fromJson(jsonDecode(response.body));
      } else {
        throw Exception('Usuário/Senha Inválidos');
      }
    } catch (e) {
      throw Exception('Erro ao efetuar login: $e');
    }
  }
}
