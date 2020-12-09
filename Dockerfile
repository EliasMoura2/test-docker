FROM node:14.15.1
# version de node

WORKDIR /app
# donde estara el proyecto

COPY package*.json /app
# copia el package*.json para tener las dependencias

RUN npm install
# una vez copiado ejecuta npm install

COPY . /app
# copia los archivos locales al directorio de trabajo

# CMD ["node", "index.js"]
# ejecuta un comando

CMD ["npm", "start"]
# ejecuta el script dentro del package.json