FROM node:16.17.0-bullseye-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV WATCHPACK_POLLING=true

CMD ["npm", "start"]