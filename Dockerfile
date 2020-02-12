FROM node:12-alpine
 
RUN apk update && \
    apk add git && \
    npm install -g npm && \
    npm install -g vue-cli && \
    npm install -g nuxt && \
    npm install -g create-nuxt-app

ENV HOST 0.0.0.0

WORKDIR /app