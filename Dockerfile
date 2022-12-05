FROM node:14-alpine

WORKDIR /api

COPY . .

RUN npm ci
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
