#!/usr/bin/env bash

set -e
set -o pipefail
set -u

if [ ! -f '/var/www/html/index.php' ]
then
  wp core download --skip-content
fi

if [ ! -f '/var/www/html/wp-config.php' ]
then
  wp config create --dbhost='mariadb' --dbname='rule2835_inolib' --dbpass='root' --dbuser='root'
fi

if ! wp core is-installed --quiet
then
  wp core install --admin_email='contact@inolib.com' --admin_password='root' --admin_user='root' --skip-email --title='INOLIB' --url='localhost:9002'
fi

sleep infinity
