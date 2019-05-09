FROM node:6.9.1

RUN mkdir -p /tmp/cache/build /workdir/release

COPY package.json /tmp/cache/build/
RUN cd /tmp/cache/build && npm install --no-optional

COPY . /workdir/

WORKDIR /workdir

CMD cp -a /tmp/cache/build/node_modules node_modules && \
  rm -rf dist && \
  npm run build && \ 
  cp -a \
    public \
    deploy/. \
    dist \
    package.json \
    release/ && \
   chown -R 1002:1002 release