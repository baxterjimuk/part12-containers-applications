FROM node:16.17.0-bullseye-slim

WORKDIR /usr/src/app

COPY . .

RUN npm ci --omit=dev

RUN npm run build

ENV NODE_ENV=production

CMD ["npm", "start"]