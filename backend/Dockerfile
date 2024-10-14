FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate

# Set the environment variable
ENV DATABASE_URL="postgresql://test1_owner:XV7tWKoP5abR@ep-billowing-scene-a5zeouod.us-east-2.aws.neon.tech/test1?sslmode=require"

EXPOSE 8787

CMD ["npm", "run", "dev"]
