Passos para o Deploy de uma API na Azure

Criação da API Localmente:

Crie uma pasta para o projeto e inicialize o Node.js:

mkdir minha-api
cd minha-api
npm init -y

Instale o Express:
npm install express

Execute a API localmente:
node app.js

Configuração da Plataforma Azure:
Instale o Azure CLI:
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

Faça login na sua conta Azure:
az login

Deploy na Azure:
Crie um grupo de recursos:
az group create --name meuGrupoDeRecursos --location eastus

Crie um serviço de aplicativo:
az appservice plan create --name meuPlanoDeApp --resource-group meuGrupoDeRecursos --sku FREE

Crie um aplicativo web:
az webapp create --resource-group meuGrupoDeRecursos --plan meuPlanoDeApp --name minhaApiAzure

Faça o deploy do código para o Azure:
az webapp up --name minhaApiAzure --resource-group meuGrupoDeRecursos
