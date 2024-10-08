FROM node:18

WORKDIR /app


RUN npm install
RUN npm install -g wrangler
RUN npm install -g prisma


COPY . .

RUN npx prisma generate

EXPOSE 8787

CMD ["npm", "run", "dev"]