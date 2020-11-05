FROM node:10.23-alpine as develop

WORKDIR /app
COPY . .
ENV HOST=0.0.0.0

RUN yarn install --non-interactive

EXPOSE 3000
CMD /bin/sh


FROM node:10.23-alpine as builder

WORKDIR /app
COPY . .

ENV NODE_ENV=production
RUN  apk add --no-cache curl git && cd /tmp && \
    curl -#L https://github.com/tj/node-prune/releases/download/v1.0.1/node-prune_1.0.1_linux_amd64.tar.gz | tar -xvzf- && \
    mv -v node-prune /usr/local/bin && rm -rvf *

RUN yarn --non-interactive && yarn cache clean && node-prune
RUN yarn build


FROM node:10.23-alpine as app

WORKDIR /app
ENV HOST=0.0.0.0

ADD package.json ./
ADD nuxt.config.js ./
ADD .env ./

COPY --from=builder ./app/node_modules ./node_modules/
COPY --from=builder ./app/.nuxt ./.nuxt/
COPY --from=builder ./app/static ./static/

EXPOSE 3000
CMD ["yarn", "start"]
