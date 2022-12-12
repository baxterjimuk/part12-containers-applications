FROM node:16.17.0-bullseye-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV MONGODB_URI=mongodb+srv://fullstack:uu0ijRYiABS4yefB@cluster0.qjwiw.mongodb.net/personApp?retryWrites=true&w=majority

ENV PORT=3001

CMD ["npm", "run", "dev"]