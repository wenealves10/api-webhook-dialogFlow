FROM node:14.17.0

ADD package.json /tmp/package.json
RUN cd /tmp && yarn install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
ADD . /opt/app

CMD ["yarn", "build"]
