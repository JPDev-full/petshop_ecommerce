# Petshop Ecommerce

Siga estas instruções para configurar o ambiente para rodar o projeto

## Instalação

Antes de começar, certifique-se de ter o Node.js e o npm instalados em sua máquina.

1. Clone este repositório:

```
git clone https://github.com/seu-usuario/seu-projeto.git
```


2. Instale as dependências do projeto executando o seguinte comando:

```bash
npm install
```

3. Instale o mysql e configure para para rodar como o usuario root com o host localhost e porta 3306.

4. Gere as migrations executando o seguinte comando:

```bash
npx prisma generate dev
```

## Configuração do arquivo .env

O projeto usa um arquivo `.env` para armazenar as variáveis de ambiente. Você precisa configurar este arquivo com as informações relevantes. Para isso, siga estas etapas:

1. Copie o arquivo `.env.example` e renomeie para `.env`:


2. Abra o arquivo `.env` em um editor de texto e configure as variáveis de ambiente conforme necessário.

## Uso

Depois de instalar as dependências e configurar o arquivo `.env`, você pode iniciar o servidor localmente executando o seguinte comando:

```bash
npm run dev
```

Isso iniciará o servidor e você poderá acessá-lo em `http://localhost:3000`.


## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
