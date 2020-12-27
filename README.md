<h1 align="center"> 
	📌 Builder TCC 🚀demonstração de UI... 📌
</h1>


## 💻 Sobre o projeto

📝 Builder TCC - é uma plataforma criada principalmente para estudantes que estão desenvolvendo seus trabalhos acadêmicos e necessitam criar ou formatar seus documentos. No Builder TCC é possível transformar um texto comum em um texto com todas as formatações exigidas pela ABNT.


## 🎨 Layout

### Dashboard

A dashboard é a página inicial que o usuário acessa, ela possui tema claro, escuro e outras features:

| **Tema Escuro** | **Tema Claro** |
|-----------------|----------------|
| <img alt="Dashboard_Dark" title="#Dashboard Dark Mode" src="./images_git/dashboard_dark.png" width="800px"/> | <img alt="Dashboard_Light" title="#Dashboard Light Mode" src="./images_git/dashboard_light.png" width="800px"/> |

|                                                                                                                                                    Modal de confirmação de ação:                                                                                                                                                    	|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:	|
| Para evitar que o usuário cometa erros e acabe perdendo o documento em progresso, é apresentado um modal com uma mensagem para confirmar a ação do usuário, por exemplo: se o usuário está com um documento aberto e tenta acessar as funcionalidade Editar ou Upload, a mensagem é apresentada aguardando a confirmação do usuário 	|
| <p align="center"><img alt="Modal de confirmação" title="#Modal de confirmação" src="./images_git/document-edit_upload.png" width="700px"/></p> |

	
|                                                    **Ocultar/Mostrar:**                                                 |
|:-----------------------------------------------------------------------------------------------------------------------:|
|                       A sidebar pode ser expandida ou ocultada através dos ícones mostrados abaixo                      |
| <img alt="Ocultar/Mostrar" title="#Ocultar/Mostrar" src="./images_git/app-drawer.png" width="200px"/> 	|


### Funcionalidades
Os usuários terão acesso a dashboard onde terão as seguinte opções:

|                                      **Novo:**                                       	|
|:---------------------------------------------------------------------------------:	|
| Exibe um espaço em branco onde será possível mexer no documento adicionando texto 	|
|        <img alt="Novo" title="#Novo" src="./images_git/document.png" width="700px"/>      |

|                                      **Editar:**                                       	|
|:---------------------------------------------------------------------------------:	        |
| Apresenta um modal para carregamento de um arquivo com a extensão específica do Builder TCC 	|
|          <img alt="Editar" title="#Editar" src="./images_git/dashboard-edit.png" width="700px"/>            |

|                                      **Upload:**                                      |
|:---------------------------------------------------------------------------------:	|
| Apresenta um modal para carregamento de um arquivo com qualquer extensão de texto 	|
|       <img alt="Upload" title="#Upload" src="./images_git/dashboard-upload.png" width="700px"/>       |


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Vue.js](https://vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en/)
- [Electron](https://www.electronjs.org/)
- [TypeScript](https://www.typescriptlang.org/)


## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, é  importante você ter previamente instalado em seu computador o [Git](https://git-scm.com) e o [Node.js](https://nodejs.org/en/). 
Além disto, é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/)

### ⏳ Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/iam-ianc/builder-tcc-demo

# Acesse a pasta do projeto no terminal/cmd
$ cd builder-tcc-demo

# Instale as dependências
$ npm install 
# OU
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ npm run electron:serve
# OU
$ yarn electron:serve

```
