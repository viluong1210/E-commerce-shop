FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN  npm install

COPY --chown=node:node . .

RUN npx prisma db push \
    && npm run build \
    && npm prune --omit=dev

EXPOSE 3001

CMD ["node", "dist/main.js"]