FROM mariadb:10.6

COPY ./docker-entrypoint-initdb.d /docker-entrypoint-initdb.d/

ENV MARIADB_ROOT_PASSWORD="root"

HEALTHCHECK CMD [ "healthcheck.sh", "--connect", "--innodb_initialized" ]
