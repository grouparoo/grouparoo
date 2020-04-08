FROM node:12

WORKDIR /grouparoo

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN npm -g config set user $USER

ENV NODE_ENV='production'
ENV PORT=3000
ENV WEB_URL=http://localhost:$PORT
ENV WEB_SERVER=true
ENV SCHEDULER=true
ENV WORKERS=1
ENV REDIS_URL="redis://localhost:6379/0"
ENV DATABASE_URL="postgresql://localhost:5432/grouparoo_development"
ENV S3_ACCESS_KEY=""
ENV S3_SECRET_ACCESS_KEY=""
ENV S3_REGION=""
ENV S3_BUCKET=""

COPY . .
RUN npm install
RUN npm run prepare

WORKDIR /grouparoo/node_modules/@grouparoo/core
CMD ["./api/bin/start"]

EXPOSE $PORT/tcp
