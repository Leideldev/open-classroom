FROM node:14-alpine

WORKDIR /server

ADD . /server

RUN npm install

ENTRYPOINT ["node", "/server/app.js"]