import 'package:flutter/material.dart';
import 'package:mobile_flutter/pages/DetalhesCondominio_page.dart';
import 'package:mobile_flutter/pages/Receitas_page.dart';
import 'package:mobile_flutter/pages/Dashboard_page.dart';
import 'package:mobile_flutter/pages/Login_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of the application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: DashboardPage(),
    );
  }
}
