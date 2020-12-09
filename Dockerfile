FROM node:14.15.1

WORKDIR /usr/src/app

ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

ADD index.js .

COPY package.json .
RUN npm install --production

# expone el puerto 3000 del contenedor 
EXPOSE 3000

ENTRYPOINT [ "/tini", "--" ]

CMD ["node", "index.js"]