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
docker run -p 5432:5432 --name postgres -e POSTGRES_HOST_AUTH_METHOD=trust -e POSTGRES_USER=codespace -e POSTGRES_PASSWORD="" -e POSTGRES_DB=grouparoo_development -d postgres

# configure node
nvm install v16
npm install -g pnpm
pnpm install --unsafe-perm

# setup apps
cp apps/staging-enterprise/.env.example apps/staging-enterprise/.env
cp apps/staging-community/.env.example apps/staging-community/.env
