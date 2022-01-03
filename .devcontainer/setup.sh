#!/usr/bin/env bash

echo "--- CONFIURING CODESPACE ---"

# general setup
sudo apt-get install htop vim -y
source $NVM_DIR/nvm.sh
nvm install v16
nvm alias default 16

# configure redis
sudo apt-get install redis-tools -y
docker run -p 6379:6379 --name redis -d redis

# configure postgres
sudo apt-get install postgresql-client -y
docker run -p 5432:5432 --name postgres -e POSTGRES_HOST_AUTH_METHOD=trust -e POSTGRES_USER=codespace -e POSTGRES_PASSWORD="" -e POSTGRES_DB=grouparoo_development -d postgres

# configure node
npm install -g pnpm
pnpm install --unsafe-perm

# setup apps
touch ~/.zshrc
echo "alias roo=/workspaces/grouparoo/cli/dist/grouparoo.js" >> ~/.zshrc
cp apps/staging-enterprise/.env.example apps/staging-enterprise/.env
cp apps/staging-community/.env.example apps/staging-community/.env
