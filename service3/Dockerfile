FROM node:12-alpine

WORKDIR /service3

COPY package*.json ./

RUN npm install --silent 

COPY index.js .

EXPOSE 3015

CMD ["node", "index.js"]