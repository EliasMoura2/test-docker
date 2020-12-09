FROM node:14.15.1
# version de node

RUN mkdir -p /usr/src/app
# crear una carpeta donde va a estar el codigo

WORKDIR /usr/src/app
# donde estara el proyecto

COPY package*.json ./
# copia el package*.json para tener las dependencias

RUN npm install
# una vez copiado ejecuta npm install

COPY . .
# copia los archivos locales al directorio de trabajo

# CMD ["node", "index.js"]
# ejecuta un comando

CMD ["npm", "run", "dev"]
# ejecuta el script dentro del package.json