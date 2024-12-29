# Aprendizado de Docker

Este repositório documenta o aprendizado sobre Docker, abordando tópicos fundamentais e avançados para o uso dessa tecnologia de containers.

## Introdução ao Docker
- O que é Docker: uma plataforma para criar, distribuir e executar aplicações em containers.
- Vantagens: portabilidade, escalabilidade e isolamento.
- Conceitos principais:
  - **Images**: Templates imutáveis para criação de containers.
  - **Containers**: Instâncias em execução de uma imagem.
  - **Docker Engine**: Mecanismo que cria e gerencia containers.

## Primeiros Passos
- Instalação do Docker em diferentes sistemas operacionais.
- Configuração inicial e uso do comando `docker version` para verificar o funcionamento.
- Testes com o comando `docker run hello-world` para criar e rodar o primeiro container.

## Imagens
- Comando `docker pull` para baixar imagens do Docker Hub.
- Criar imagens personalizadas usando um Dockerfile.
- Visualizar imagens locais com `docker images`.
- Gerenciar e remover imagens desnecessárias com `docker rmi`.

## Containers e Overlays
- Criar e rodar containers com `docker run`.
- Gerenciamento de containers: `docker ps`, `docker stop`, `docker rm`.
- Uso de volumes overlay para preservar estados entre execuções de containers.

## Networking
- Redes bridge, host e none.
- Criação de redes personalizadas com `docker network create`.
- Comunicação entre containers utilizando redes customizadas.
- Uso de `docker network connect` e `disconnect`.

## Storage
- Diferença entre volumes, bind mounts e tmpfs.
- Criação e uso de volumes com `docker volume create`.
- Montagem de volumes em containers com `docker run -v`.
- Persistência de dados em ambientes de containers.

## Build de Imagens
- Estrutura e sintaxe do Dockerfile:
  - Instruções como `FROM`, `RUN`, `COPY`, `CMD`.
  - Boas práticas para construção de imagens.
- Criar imagens com `docker build`.
- Teste e validação das imagens criadas.

## Multistaging
- Construção de imagens otimizadas com múltiplos estágios.
- Reduzir o tamanho de imagens ao separar as fases de build e runtime.
- Uso de `COPY --from=<stage>` para importar artefatos específicos de outro estágio.

## Distribuição de Imagens
- Publicar imagens no Docker Hub.
- Utilização de repositórios privados.
- Configuração e uso de ferramentas de CI/CD para automação do build e push de imagens.

## Docker Compose
- Estrutura do arquivo `docker-compose.yml`.
- Criação e orquestração de múltiplos containers.
- Uso de comandos básicos como `docker-compose up` e `down`.
- Variáveis de ambiente e boas práticas para configuração.

## Docker Swarm
- Introdução ao Docker Swarm para orquestração de containers.
- Criar e gerenciar um cluster Swarm.
- Definição e escalabilidade de serviços com Swarm.
- Deploy de stacks com `docker stack deploy`.

## Segurança no Docker
- Princípios básicos de segurança em containers.
- Configuração de políticas de controle de acesso (AppArmor, SELinux).
- Verificação de imagens com `docker scan`.
- Uso de usuários não root nos containers.

---

## Observações Finais
- Docker é uma tecnologia poderosa e versátil, essencial para ambientes modernos de desenvolvimento.
- Este repositório será atualizado continuamente conforme novas lições forem aprendidas e exploradas.

---
**Contato:** Caso tenha dúvidas ou sugestões, abra um issue neste repositório ou contribua com um pull request.


