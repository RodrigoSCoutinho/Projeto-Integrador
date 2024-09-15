import 'package:flutter/material.dart';

class ReceitasPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Receitas'),
        backgroundColor: Colors.greenAccent,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: ListView(
          children: [
            Card(
              elevation: 4,
              child: ListTile(
                title: Text('Receita de condomínio X'),
                subtitle: Text('R\$ 10.000,00'),
                leading: Icon(Icons.attach_money, color: Colors.green),
              ),
            ),
            SizedBox(height: 10),
            Card(
              elevation: 4,
              child: ListTile(
                title: Text('Receita de condomínio Y'),
                subtitle: Text('R\$ 15.000,00'),
                leading: Icon(Icons.attach_money, color: Colors.green),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
