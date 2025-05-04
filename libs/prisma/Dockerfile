FROM node:18

WORKDIR /app

COPY ./libs/prisma ./prisma
COPY package*.json ./

COPY .env ./libs/prisma/env

RUN npm install

CMD ["npx", "prisma", "migrate", "deploy"]
