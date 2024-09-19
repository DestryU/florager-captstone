FROM jonasal/nginx-certbot:latest-alpine


RUN rm /etc/nginx/conf.d/*
COPY *.conf /etc/nginx/conf.d/
COPY *.conf.template /etc/nginx/templates/