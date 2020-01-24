FROM node:10-alpine

COPY . /root/app

RUN cd /root/app && \
    yarn && yarn build && \
    mkdir -p /var/www && cp -r /root/app/dist /var/www/ && \
    rm -rf /root/app

ENTRYPOINT [ "node", "/var/www/dist/server.js" ]

EXPOSE 8080