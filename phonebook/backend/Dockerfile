FROM node:16.17.0-bullseye-slim
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --omit=dev

#ENV DEBUG=todo-backend:*

ENV MONGODB_URI=mongodb+srv://fullstack:uu0ijRYiABS4yefB@cluster0.qjwiw.mongodb.net/personApp?retryWrites=true&w=majority

ENV PORT=3001

ENV NODE_ENV=production
  
USER node

CMD ["npm", "start"]