FROM node:22.8-alpine

COPY ./home/node /home/node/

CMD [ "sleep", "infinity" ]

USER root

RUN chown --recursive node:node /home/node

RUN apk add --no-cache composer
RUN apk add --no-cache curl
RUN apk add --no-cache fish
RUN apk add --no-cache git
RUN apk add --no-cache openssh
RUN apk add --no-cache php83 php83-simplexml php83-tokenizer php83-xmlreader php83-xmlwriter
RUN apk add --no-cache shadow

RUN corepack enable pnpm

USER node

RUN chsh --shell $(which fish)

RUN fish --command="curl --location --silent 'https://raw.githubusercontent.com/jorgebucaran/fisher/main/functions/fisher.fish' | source && fisher install 'jorgebucaran/fisher'"
RUN fish --command="fisher install 'jorgebucaran/autopair.fish'"
RUN fish --command="fisher install 'nickeb96/puffer-fish'"
RUN fish --command="fisher install 'meaningful-ooo/sponge'"
