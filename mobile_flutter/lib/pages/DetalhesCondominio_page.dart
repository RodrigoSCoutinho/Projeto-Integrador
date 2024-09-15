import 'package:flutter/material.dart';

class DetalhesCondominioPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Condomínios'),
        backgroundColor: Colors.orangeAccent,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: ListView(
          children: [
            Card(
              elevation: 4,
              child: ListTile(
                title: Text('Condomínio X'),
                subtitle: Text('Rua Exemplo, 123'),
                leading: Icon(Icons.business, color: Colors.blueAccent),
              ),
            ),
            SizedBox(height: 10),
            Card(
              elevation: 4,
              child: ListTile(
                title: Text('Condomínio Y'),
                subtitle: Text('Avenida Exemplo, 456'),
                leading: Icon(Icons.business, color: Colors.blueAccent),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
