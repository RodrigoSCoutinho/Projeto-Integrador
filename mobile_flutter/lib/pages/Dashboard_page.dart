import 'package:flutter/material.dart';
import 'package:fl_chart/fl_chart.dart';

class DashboardPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Dashboard Financeiro'),
        backgroundColor: Colors.blueAccent,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Saldo atual
              Card(
                elevation: 4,
                child: ListTile(
                  title: Text('Saldo Atual'),
                  subtitle: Text('R\$ 50.000,00'),
                  leading:
                      Icon(Icons.account_balance_wallet, color: Colors.green),
                ),
              ),
              SizedBox(height: 20),

              // Gráfico de despesas
              Text('Relatório de Despesas (Últimos 6 meses)',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              SizedBox(height: 10),
              AspectRatio(
                aspectRatio: 1.5,
                child: BarChart(
                  BarChartData(
                    alignment: BarChartAlignment.spaceAround,
                    barGroups: [
                      BarChartGroupData(
                          x: 1, barRods: [BarChartRodData(y: 10)]),
                      BarChartGroupData(
                          x: 2, barRods: [BarChartRodData(y: 15)]),
                      BarChartGroupData(
                          x: 3, barRods: [BarChartRodData(y: 12)]),
                      BarChartGroupData(x: 4, barRods: [BarChartRodData(y: 8)]),
                      BarChartGroupData(
                          x: 5, barRods: [BarChartRodData(y: 20)]),
                    ],
                  ),
                ),
              ),
              SizedBox(height: 20),

              // Pagamentos pendentes
              Text('Pagamentos Pendentes',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              SizedBox(height: 10),
              Card(
                elevation: 4,
                child: Column(
                  children: [
                    ListTile(
                      title: Text('João Silva'),
                      subtitle:
                          Text('R\$ 800,00 - Último vencimento: 05/09/2024'),
                      leading: Icon(Icons.warning, color: Colors.red),
                    ),
                    Divider(),
                    ListTile(
                      title: Text('Maria Santos'),
                      subtitle:
                          Text('R\$ 1.200,00 - Último vencimento: 03/09/2024'),
                      leading: Icon(Icons.warning, color: Colors.red),
                    ),
                  ],
                ),
              ),
              SizedBox(height: 20),

              // Gráfico de receita mensal
              Text('Relatório de Receita (Últimos 6 meses)',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              SizedBox(height: 10),
              AspectRatio(
                aspectRatio: 1.5,
                child: LineChart(
                  LineChartData(
                    lineBarsData: [
                      LineChartBarData(
                        spots: [
                          FlSpot(1, 10),
                          FlSpot(2, 20),
                          FlSpot(3, 30),
                          FlSpot(4, 25),
                          FlSpot(5, 40),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
