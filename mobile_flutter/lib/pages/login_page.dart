import 'package:flutter/material.dart';
import 'package:mobile_flutter/components/my_button.dart';
import 'package:mobile_flutter/components/my_textfield.dart';
import 'package:mobile_flutter/components/square_tile.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'dashboard_page.dart';

class LoginPage extends StatelessWidget {
  LoginPage({super.key});

  final usernameController = TextEditingController();
  final passwordController = TextEditingController();

  // Método de autenticação do usuário
  void signUserIn(BuildContext context) async {
    String username = usernameController.text;
    String password = passwordController.text;

    String apiUrl = 'http://localhost:8080/api/login';

    try {
      var response = await http.post(
        Uri.parse(apiUrl),
        headers: {"Content-Type": "application/json"},
        body: jsonEncode({
          'username': username,
          'password': password,
        }),
      );

      if (response.statusCode == 200) {
        var data = jsonDecode(response.body);
        String token = data['token'];

        // Armazenar o token JWT localmente para futuras requisições
        print("Login realizado com sucesso: $token");

        // Redirecionar para o dashboard financeiro
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(
            builder: (context) =>
                DashboardPage(), // Redireciona para o dashboard
          ),
        );
      } else {
        print("Erro no login: ${response.body}");
      }
    } catch (e) {
      print("Erro na requisição: $e");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const SizedBox(height: 50),

              // Logo marca
              Image.asset(
                'lib/images/logo-marca.jpeg',
                width: 100,
                height: 100,
              ),

              const SizedBox(height: 50),

              // Painel administrativo
              Text(
                'Painel Administrativo',
                style: TextStyle(
                  color: Colors.grey[700],
                  fontSize: 16,
                ),
              ),

              const SizedBox(height: 25),

              // Username textfield
              MyTextField(
                controller: usernameController,
                hintText: 'Username',
                obscureText: false,
              ),

              const SizedBox(height: 10),

              // Password textfield
              MyTextField(
                controller: passwordController,
                hintText: 'Password',
                obscureText: true,
              ),

              const SizedBox(height: 10),

              // Esqueceu a senha?
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 25.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Text(
                      'Forgot Password?',
                      style: TextStyle(color: Colors.grey[600]),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 25),

              // Sign in button
              MyButton(
                onTap: () => signUserIn(context),
              ),

              const SizedBox(height: 50),

              // Ou continue com
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 25.0),
                child: Row(
                  children: [
                    Expanded(
                      child: Divider(
                        thickness: 0.5,
                        color: Colors.grey[400],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 10.0),
                      child: Text(
                        'Or continue with',
                        style: TextStyle(color: Colors.grey[700]),
                      ),
                    ),
                    Expanded(
                      child: Divider(
                        thickness: 0.5,
                        color: Colors.grey[400],
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 50),

              // Google + Apple sign in buttons
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  // Google button
                  SquareTile(imagePath: 'lib/images/google.png'),

                  SizedBox(width: 25),
                  // Apple button
                  SquareTile(imagePath: 'lib/images/apple.png'),
                ],
              ),

              const SizedBox(height: 50),

              // Not a member? Register now
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Not a member?',
                    style: TextStyle(color: Colors.grey[700]),
                  ),
                  const SizedBox(width: 4),
                  const Text(
                    'Register now',
                    style: TextStyle(
                      color: Colors.blue,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
