#Usando o ubunto como imagem base
FROM ubuntu:bionic

#instalação de alguns pacotes
RUN apt-get update \
    && apt-get install -y \
    bind9 \
    bind9utils \
    bind9-doc

#expoe a porta 53
EXPOSE 53

#Enable IPV4, configura a porta onde recebe as bucas DNS
RUN sed -i  's/OPTIONS=.*/OPTIONS="-4 -u bind"/' /etc/default/bind9

#Copy configuration files
COPY named.conf.options /etc/bind/
COPY named.conf.local /etc/bind/
COPY db.minhaempresa.com.br /etc/bind/zones/

#Run eternal loop
CMD ["/bin/bash","-c","while :; do sleep 10; done"]