FROM node:12-alpine

WORKDIR /service2

COPY package*.json ./

RUN npm install --silent

COPY index.js .

EXPOSE 3010

CMD ["node", "index.js"]