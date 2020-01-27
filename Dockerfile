FROM node:10.9-alpine

COPY . /node

WORKDIR /node

RUN npm install

CMD ["npm", "start"]
