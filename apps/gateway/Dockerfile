FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./nest-cli.json ./nest-cli.json
COPY ./tsconfig.json ./tsconfig.json
COPY .env.* ./
COPY apps/gateway ./apps/gateway
COPY libs ./libs

RUN npx prisma generate --schema=libs/prisma/schema.prisma

RUN npm run build


FROM node:20 AS development

WORKDIR /app
ENV NODE_ENV=development

COPY --from=builder /app ./
RUN npm install

CMD ["npm", "run", "start:dev:gateway"]



FROM node:20 AS production

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.env.* ./

CMD ["node", "dist/apps/gateway/src/main"]