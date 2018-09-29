FROM node:10-alpine
EXPOSE 80
COPY . .
RUN npm install
CMD node server.js