# Pega uma imagem base do Node
FROM node:20-alpine3.20

LABEL maintainer="Diego"

# O healthcheck vai testar a aplicação, neste caso, com requisição HTTP no status
HEALTHCHECK CMD \
    curl -sf http://localhost:3000/ || exit 1

# Define um volume para armazenamento persistente
VOLUME [ "/var/nodeapp" ]

# Cria o diretório e o usuário no Alpine
RUN apk add --no-cache curl bash && \
    adduser -h /var/nodeapp -s /bin/bash -D nodeapp

# Define o diretório de trabalho
WORKDIR /var/nodeapp

# Copia o app.js para o contêiner
COPY app.js .

# Configura permissões apropriadas no arquivo
RUN chown nodeapp:nodeapp app.js

# Porta que o contêiner deve escutar
EXPOSE 3000

# Define uma variável de ambiente com um valor padrão
ARG VERSION
ENV VERSION=${VERSION:-1.0.0}

# Troca para o usuário recém-criado
USER nodeapp

# O entry point está implícito na imagem, rodando o Node.js
ENTRYPOINT [ "node" ]

# Comando padrão ao rodar o contêiner
CMD [ "app.js" ]
