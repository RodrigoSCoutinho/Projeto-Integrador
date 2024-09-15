# mobile_flutter

Projeto mobile em Flutter com objetivo a criação do aplicativo multiplataforma.

# Projeto Flutter: Página de Login

Este projeto Flutter é uma aplicação simples que demonstra uma página de login. A página permite que o usuário insira seu nome de usuário e senha, e os dados são enviados para uma API Spring Boot para autenticação. Além disso, a página inclui botões para login com Google e Apple.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

-   `lib/`
    -   `components/`
        -   `my_button.dart` – Um widget personalizado para o botão de login.
        -   `my_textfield.dart` – Um widget personalizado para os campos de texto.
        -   `square_tile.dart` – Um widget personalizado para os botões de login com Google e Apple.
    -   `login_page.dart` – A página de login principal.

## Página de Login

<img src="login.png" alt="Logo do Projeto" width="300">

A página de login (`login_page.dart`) é a tela inicial da aplicação e possui os seguintes componentes:

-   **Ícone de Bloqueio**: Um ícone visual representando segurança.
-   **Mensagem de Boas-Vindas**: Um texto informativo para o usuário.
-   **Campos de Texto**: Campos para inserção do nome de usuário e senha.
-   **Botão de Login**: Um botão para enviar os dados de login para a API Spring Boot.
-   **Opções de Login com Google e Apple**: Botões para login usando contas do Google e Apple.
-   **Link de Registro**: Um texto que leva o usuário para a página de registro, caso ainda não tenha uma conta.

<img src="dashboard.png" alt="Logo do Projeto" width="300">

A página de login (`Dashboard_page.dart`) é a tela principal do Dashboard Financeiro inclui os seguintes elementos:

-   **Saldo Atual**: Um cartão que exibe o saldo atual do usuário.
-   **Relatório de Despesas (Últimos 6 meses)**: Um gráfico de barras que mostra as despesas dos últimos seis meses.
-   **Pagamentos Pendentes**: Uma lista de pagamentos pendentes com informações detalhadas.
-   **Relatório de Receita (Últimos 6 meses)**: Um gráfico de linha que mostra a receita dos últimos seis meses.

<img src="receitas.png" alt="Logo do Projeto" width="300">

A página de login (`Receitas_page.dart`) é a tela secundária do Dashboard Financeiro inclui os seguintes elementos:

-   **Título da Página**: Um título que indica que a página exibe receitas.
-   **Cartões de Receita**: Cartões que exibem informações sobre diferentes receitas, incluindo o nome da receita e o valor.
-   **Ícones de Dinheiro**: Ícones que representam visualmente as receitas.

<img src="detalhes.png" alt="Logo do Projeto" width="300">

A página de login (`Detalhes_page.dart`) é a tela terciária do Dashboard Financeiro inclui os seguintes elementos:

-   **Título da Página**: Um título que indica que a página exibe detalhes dos condomínios.
-   **Cartões de Condomínio**: Cartões que exibem informações sobre diferentes condomínios, incluindo o nome e o endereço.
-   **Ícones de Negócios**: Ícones que representam visualmente os condomínios.

## Importação da Imagem

As imagens utilizadas na página de login (por exemplo, os ícones do Google e Apple) devem estar localizadas no diretório `lib/images/`. Certifique-se de que os arquivos de imagem (`google.png` e `apple.png`) estejam presentes neste diretório e que o caminho para as imagens esteja correto.

**Caminho das Imagens:**

-   `lib/images/google.png`
-   `lib/images/apple.png`
