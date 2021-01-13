FROM node:12.20.1-stretch-slim

WORKDIR /usr/src/app
COPY package*.json .
RUN npm install

EXPOSE 3000
CMD [ "yarn", "dev" ]

COPY . .
