FROM node:12-alpine

WORKDIR /service_b

COPY package*.json ./

RUN npm install --silent

COPY index.js .

EXPOSE 3010

CMD ["node", "index.js"]