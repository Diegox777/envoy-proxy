FROM node:12-alpine

WORKDIR /service_c

COPY package*.json ./

RUN npm install --silent 

COPY index.js .

EXPOSE 3015

CMD ["node", "index.js"]