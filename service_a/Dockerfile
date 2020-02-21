FROM node:12-alpine AS build

WORKDIR /service_a

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN npm run build

FROM nginx:1-alpine

COPY --from=build /service_a/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/

EXPOSE 3005

CMD ["nginx", "-g", "daemon off;"]
