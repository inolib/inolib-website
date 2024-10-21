FROM wordpress:php8.3-apache

USER root

RUN groupmod --gid 1000 www-data
RUN usermod --gid 1000 --uid 1000 www-data

USER www-data
