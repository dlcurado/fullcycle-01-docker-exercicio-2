FROM node

RUN apt-get update && \
    apt-get install vim && \
    apt-get install ping

WORKDIR /usr/src/app

EXPOSE 3000

CMD [ "node", "/usr/src/app/index.js" ]