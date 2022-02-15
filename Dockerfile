FROM node:12.18.1

EXPOSE 3000

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN cd /usr/src/app \
        && npm config set registry https://repo.mer25.com.vn/repository/npm/ \
        && npm run update-npm-private \
        && npm run update-npm-private-logger \
        && npm install \
        && npm install pm2 check-env -g \
        && npm cache clear --force \
        && rm -rf /tmp/ \
        && chmod +x configure-and-run.sh

CMD ["./configure-and-run.sh"]
