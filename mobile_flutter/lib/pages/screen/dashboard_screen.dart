import 'package:flutter/material.dart';

class DashboardScreen extends StatefulWidget {
  @override
  _DashboardScreenState createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  final String nomeUsuario = 'Rodrigo Coutinho';
  final List<String> areasDisponiveis = [
    'SALAO_DE_FESTAS',
    'CHURRASQUEIRA',
    'ACADEMIA',
    'QUADRA'
  ];
  final List<String> categoriasDespesas = [
    'MANUTENCAO',
    'LIMPEZA',
    'SEGURANÇA',
    'AGUA & LUZ',
    'OUTROS'
  ];
  final List<Map<String, dynamic>> reservas = [
    {
      'area': 'SALAO_DE_FESTAS',
      'morador': 'João',
      'data': '2023-10-01',
      'status': 'PENDENTE'
    },
    // Add more reservations here
  ];
  final List<Map<String, dynamic>> despesas = [
    {
      'descricao': 'Manutenção',
      'valor': 30,
      'data': '2023-10-01',
      'categoria': 'MANUTENCAO'
    },
    // Add more expenses here
  ];

  final _areaController = TextEditingController();
  final _moradorController = TextEditingController();
  final _dataReservaController = TextEditingController();
  final _descricaoDespesaController = TextEditingController();
  final _valorDespesaController = TextEditingController();
  final _categoriaDespesaController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          color: Colors.grey[200],
        ),
        child: Column(
          children: [
            _buildNavbar(),
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  children: [
                    _buildSummaryCards(),
                    SizedBox(height: 24),
                    _buildReservasSection(),
                    SizedBox(height: 24),
                    _buildFinanceiroSection(),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildNavbar() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16.0),
      color: Colors.blueGrey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Portal do Síndico',
            style: TextStyle(
                color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 8),
          Text(
            'Bem-vindo, $nomeUsuario',
            style: TextStyle(color: Colors.white, fontSize: 16),
          ),
        ],
      ),
    );
  }

  Widget _buildSummaryCards() {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(
        children: [
          _buildCard(
            'Reservas Pendentes',
            reservas.where((r) => r['status'] == 'PENDENTE').length.toString(),
            Icons.pending_actions,
            Colors.orange,
          ),
          _buildCard(
            'Total de Despesas',
            'R\$ ${despesas.fold(0.0, (double sum, item) => sum + item['valor']).toStringAsFixed(2)}',
            Icons.attach_money,
            Colors.red,
          ),
          _buildCard(
            'Áreas Disponíveis',
            areasDisponiveis.length.toString(),
            Icons.location_city,
            Colors.green,
          ),
        ],
      ),
    );
  }

  Widget _buildCard(String title, String number, IconData icon, Color color) {
    return Card(
      elevation: 4,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      margin: const EdgeInsets.symmetric(horizontal: 8.0),
      child: Container(
        width: 140,
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 40, color: color),
            SizedBox(height: 16),
            Text(
              number,
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
                color: Colors.black,
              ),
            ),
            SizedBox(height: 8),
            Text(
              title,
              style: TextStyle(
                fontSize: 16,
                color: Colors.grey[700],
              ),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildReservasSection() {
    return Card(
      elevation: 4,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Gerenciamento de Reservas',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            SizedBox(height: 16),
            _buildReservaForm(),
            SizedBox(height: 16),
            _buildReservasTable(),
          ],
        ),
      ),
    );
  }

  Widget _buildReservaForm() {
    return Column(
      children: [
        DropdownButtonFormField<String>(
          decoration: InputDecoration(
              labelText: 'Selecione uma área', border: OutlineInputBorder()),
          items: areasDisponiveis.map((area) {
            return DropdownMenuItem<String>(
              value: area,
              child: Text(area),
            );
          }).toList(),
          onChanged: (value) {
            _areaController.text = value!;
          },
        ),
        SizedBox(height: 16),
        TextField(
          controller: _moradorController,
          decoration: InputDecoration(
              labelText: 'Nome do morador', border: OutlineInputBorder()),
        ),
        SizedBox(height: 16),
        TextField(
          controller: _dataReservaController,
          decoration:
              InputDecoration(labelText: 'Data', border: OutlineInputBorder()),
          keyboardType: TextInputType.datetime,
        ),
        SizedBox(height: 16),
        ElevatedButton(
          onPressed: _addReserva,
          child: Text('Criar Reserva'),
          style: ElevatedButton.styleFrom(
            primary: Colors.blue,
            onPrimary: Colors.white,
            padding: EdgeInsets.symmetric(vertical: 16),
            shape:
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
          ),
        ),
      ],
    );
  }

  void _addReserva() {
    setState(() {
      reservas.add({
        'area': _areaController.text,
        'morador': _moradorController.text,
        'data': _dataReservaController.text,
        'status': 'PENDENTE'
      });
      _areaController.clear();
      _moradorController.clear();
      _dataReservaController.clear();
    });
  }

  Widget _buildReservasTable() {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: DataTable(
        columns: [
          DataColumn(label: Text('Área')),
          DataColumn(label: Text('Morador')),
          DataColumn(label: Text('Data')),
          DataColumn(label: Text('Status')),
          DataColumn(label: Text('Ações')),
        ],
        rows: reservas.map((reserva) {
          return DataRow(cells: [
            DataCell(Text(reserva['area'])),
            DataCell(Text(reserva['morador'])),
            DataCell(Text(reserva['data'])),
            DataCell(Text(reserva['status'])),
            DataCell(Row(
              children: [
                if (reserva['status'] == 'PENDENTE')
                  ElevatedButton(
                    onPressed: () {
                      _updateReservaStatus(reserva, 'APROVADA');
                    },
                    child: Text('Aprovar'),
                    style: ElevatedButton.styleFrom(
                        primary: Colors.green, onPrimary: Colors.white),
                  ),
                SizedBox(width: 8),
                if (reserva['status'] == 'PENDENTE')
                  ElevatedButton(
                    onPressed: () {
                      _updateReservaStatus(reserva, 'RECUSADA');
                    },
                    child: Text('Recusar'),
                    style: ElevatedButton.styleFrom(
                        primary: Colors.red, onPrimary: Colors.white),
                  ),
              ],
            )),
          ]);
        }).toList(),
      ),
    );
  }

  void _updateReservaStatus(Map<String, dynamic> reserva, String status) {
    setState(() {
      reserva['status'] = status;
    });
  }

  Widget _buildFinanceiroSection() {
    return Card(
      elevation: 4,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Controle Financeiro',
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            SizedBox(height: 16),
            _buildDespesaForm(),
            SizedBox(height: 16),
            _buildDespesasTable(),
          ],
        ),
      ),
    );
  }

  Widget _buildDespesaForm() {
    return Column(
      children: [
        TextField(
          controller: _descricaoDespesaController,
          decoration: InputDecoration(
              labelText: 'Descrição', border: OutlineInputBorder()),
        ),
        SizedBox(height: 16),
        TextField(
          controller: _valorDespesaController,
          decoration:
              InputDecoration(labelText: 'Valor', border: OutlineInputBorder()),
          keyboardType: TextInputType.number,
        ),
        SizedBox(height: 16),
        DropdownButtonFormField<String>(
          decoration: InputDecoration(
              labelText: 'Selecione uma categoria',
              border: OutlineInputBorder()),
          items: categoriasDespesas.map((categoria) {
            return DropdownMenuItem<String>(
              value: categoria,
              child: Text(categoria),
            );
          }).toList(),
          onChanged: (value) {
            _categoriaDespesaController.text = value!;
          },
        ),
        SizedBox(height: 16),
        ElevatedButton(
          onPressed: _addDespesa,
          child: Text('Registrar Despesa'),
          style: ElevatedButton.styleFrom(
            primary: Colors.blue,
            onPrimary: Colors.white,
            padding: EdgeInsets.symmetric(vertical: 16),
            shape:
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
          ),
        ),
      ],
    );
  }

  void _addDespesa() {
    setState(() {
      despesas.add({
        'descricao': _descricaoDespesaController.text,
        'valor': double.parse(_valorDespesaController.text),
        'data': DateTime.now().toString().split(' ')[0],
        'categoria': _categoriaDespesaController.text
      });
      _descricaoDespesaController.clear();
      _valorDespesaController.clear();
      _categoriaDespesaController.clear();
    });
  }

  Widget _buildDespesasTable() {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: DataTable(
        columns: [
          DataColumn(label: Text('Descrição')),
          DataColumn(label: Text('Valor')),
          DataColumn(label: Text('Data')),
          DataColumn(label: Text('Categoria')),
        ],
        rows: despesas.map((despesa) {
          return DataRow(cells: [
            DataCell(Text(despesa['descricao'])),
            DataCell(Text('R\$ ${despesa['valor'].toStringAsFixed(2)}')),
            DataCell(Text(despesa['data'])),
            DataCell(Text(despesa['categoria'])),
          ]);
        }).toList(),
      ),
    );
  }
}
