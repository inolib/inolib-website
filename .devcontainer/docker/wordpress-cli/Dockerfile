FROM wordpress:cli-php8.3

COPY ./home/www-data /home/www-data/
COPY ./usr/local/bin /usr/local/bin/

HEALTHCHECK CMD [ "wp", "core", "is-installed", "--quiet" ]

CMD [ "startup.sh" ]

USER root

RUN deluser www-data

RUN addgroup -g 1000 www-data
RUN adduser -D -G www-data -u 1000 www-data

RUN chown --recursive www-data:www-data /home/www-data

RUN apk add --no-cache fish
RUN apk add --no-cache shadow

USER www-data

RUN chsh --shell $(which fish)

RUN fish --command="curl --location --silent 'https://raw.githubusercontent.com/jorgebucaran/fisher/main/functions/fisher.fish' | source && fisher install 'jorgebucaran/fisher'"
RUN fish --command="fisher install 'jorgebucaran/autopair.fish'"
RUN fish --command="fisher install 'nickeb96/puffer-fish'"
RUN fish --command="fisher install 'meaningful-ooo/sponge'"
