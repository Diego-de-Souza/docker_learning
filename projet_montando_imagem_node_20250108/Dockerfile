#Caminho de origen, o nomde da imagem e a versão
FROM node:20.10.0-alpine

# Responsavel por fazer a imagem copiar arquivos para dentro dela arquivos, para um determinado destino dentro da imagem
# o diretorio opt é um padrão do linux, utilizado para colocar arquivos que não sejam do sistema operacional
COPY server.js /opt/app-nodejs/

# define qual o diretorio de trabalho do dockerfile, o diretorio de trabalho onde o comando vai rodar
WORKDIR /opt/app-nodejs/

# executa um comando apos a imagem ser montada e estiver no container, o comando de execução do script
CMD node /opt/app-nodejs/server.js
