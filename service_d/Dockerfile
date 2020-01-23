FROM node:12-alpine

WORKDIR /service_d

COPY package*.json ./

RUN npm install --silent 

COPY index.js .

EXPOSE 3020

CMD ["node", "index.js"]