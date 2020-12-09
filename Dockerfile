FROM node:14.15.1-alpine3.10

WORKDIR /usr/src/app

ADD index.js .

COPY . .
RUN npm install

CMD ["node", "index.js"]