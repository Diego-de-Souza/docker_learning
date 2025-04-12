# Montagem de imagem do Node com docker

Neste projeto é montado um container com uma imagem do node 20.10.0-alpine para rodar uma aplicação node.js.
O objetivo é dar os primeiros passos com o Dockerfile e sua configurações, monstrar alguns de seus comandos.

comando básico:
 * **FROM** = é a primeira instrução obrigatória que especifica a imagem base a partir da qual o contêiner será construído. Ele define o ponto de partida do ambiente em que a aplicação será executada.

 * **COPY** = é usado para copiar arquivos e diretórios do sistema de arquivos host (máquina onde o Docker está sendo executado) para o sistema de arquivos do contêiner. Ele é útil para incluir código-fonte, arquivos de configuração ou qualquer outro dado necessário no contêiner.

 * **WORKDIR** = é usado para definir o diretório de trabalho dentro do contêiner. Ele altera o diretório atual para o especificado, e todos os comandos subsequentes (RUN, CMD, ENTRYPOINT, etc.) que usarem caminhos relativos serão executados em relação a este diretório.

 * **CMD** = é usado para especificar o comando padrão que será executado quando o contêiner for iniciado.


O comando "*docker build -t app-nodejs .*" é usado para construir uma imagem Docker com base no Dockerfile localizado no diretório atual. Vamos analisar os elementos desse comando:

Elementos do Comando
```
    docker build
```
Esse comando constrói uma imagem a partir de um Dockerfile.
```
    -t app-nodejs
```
A flag -t (tag) atribui um nome e, opcionalmente, uma tag à imagem.

 - No exemplo, o nome da imagem será app-nodejs.
 - Se uma tag não for especificada, será usada a tag padrão latest. Por exemplo, o nome completo será app-nodejs:latest.

"." 

O ponto especifica o contexto de build. O Docker irá procurar o arquivo Dockerfile no diretório atual e incluir todos os arquivos e diretórios no contexto ao construir a imagem.

