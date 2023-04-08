FROM node:18 as build
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm ci --only=production
RUN npm run build

FROM node:18.15.0-bullseye

WORKDIR /usr/src/app
ARG NODE_ENV
ARG REACT_APP_BACKEND_PORT

ENV NODE_ENV ${NODE_ENV}
ENV REACT_APP_BACKEND_PORT ${REACT_APP_BACKEND_PORT}

RUN npm install -g serve
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node --from=build /usr/src/app/build /usr/src/app/build
USER node
CMD ["serve", "-l", "tcp://0.0.0.0:80", "-s", "build"]
