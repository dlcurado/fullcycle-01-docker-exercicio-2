FROM nginx:latest

#COPY html /usr/share/nginx/html

RUN apt-get update && \
    apt-get install vim && \
    apt-get install ping
    
ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]