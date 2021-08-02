FROM node:16.4.1-alpine
COPY package*.json ./
RUN npm install --quiet
WORKDIR /src
COPY . .
RUN npm run build
ENV port=8080
EXPOSE 8080
CMD [ "npm", "start" ]
