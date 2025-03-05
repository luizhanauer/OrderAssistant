# Etapa de construção
FROM node:22.14.0 AS build

WORKDIR /app

# Copia os arquivos da aplicação
COPY index.html ./
COPY package*.json ./
COPY vite.config.js ./
COPY ./src ./src
COPY ./public ./public

# Instala as dependências
RUN npm install

# Build da aplicação
RUN npm run build

# Etapa para servir a aplicação
FROM nginx:alpine

# Copia os arquivos da build para o servidor
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta padrão
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
