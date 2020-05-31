FROM node:12

WORKDIR /web

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 80
CMD [ "npm", "start"]