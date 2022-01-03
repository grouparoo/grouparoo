#!/usr/bin/env bash

echo "--- CONFIURING CODESPACE ---"

# general setup
sudo apt-get upddate
sudo apt-get install htop vim -y

# configure redis
sudo apt-get install redis-tools -y
docker run -p 6379:6379 --name redis -d redis

# configure postgres
sudo apt-get install postgresql-client -y
docker run -p 5432:5432 --name postgres -d postgres -e 'POSTGRES_PASSWORD=""' -e 'POSTGRES_HOST_AUTH_METHOD=trust' -e "POSTGRES_DB=grouparoo_development"

# configure node
nvm install v16
npm install -g pnpm
pnpm install --unsafe-perm


