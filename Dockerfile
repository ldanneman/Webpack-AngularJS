FROM node:alpine
ENV NODE_VERSION 16.4.1
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENV port=8080
EXPOSE 8080
CMD [ "npm", "start" ]
