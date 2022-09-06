#stage 1
FROM node:latest as build-step
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


#stage 2
FROM nginx:alpine
COPY --from=build-step /app/dist/shared-expenses /usr/share/nginx/html