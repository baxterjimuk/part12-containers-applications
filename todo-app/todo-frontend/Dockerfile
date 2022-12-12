FROM node:16.17.0-bullseye-slim as base

WORKDIR /usr/src/app

COPY . .

FROM base as test
RUN npm ci
ENV CI=true
RUN npm run test

FROM base as prod
RUN npm ci --omit=dev
#ENV REACT_APP_BACKEND_URL=http://localhost:3001
RUN npm run build
#RUN npm install -g serve
#CMD ["serve", "build"]
ENV NODE_ENV=production
CMD ["npm", "start"]