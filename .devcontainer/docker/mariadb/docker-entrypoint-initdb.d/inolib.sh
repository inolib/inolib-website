#!/usr/bin/env bash

set -e
set -o pipefail
set -u

mariadb --password='root' --user "root" <<-EOSQL
  CREATE DATABASE rule2835_inolib;
EOSQL
