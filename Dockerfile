FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/node:16.16-alpine3.16 As development
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY .npmrc package*.json tsconfig.* ./
COPY node_modules ./node_modules
COPY db ./db
COPY src ./src
RUN unset CI && npm run build --quiet

FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/node:16.16-alpine3.16 as production
RUN apk add --no-cache libcrypto1.1=1.1.1u-r1 libssl1.1=1.1.1u-r1 libcrypto3=3.0.9-r0 libssl3=3.0.9-r0
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ARG APP_PORT=5000
ENV APP_PORT=${APP_PORT}
USER node
WORKDIR /usr/src/app
COPY --from=development --chown=node:node /usr/src/app/package*.json .
COPY --from=development --chown=node:node /usr/src/app/node_modules ./node_modules
COPY --from=development --chown=node:node /usr/src/app/dist ./dist
EXPOSE ${APP_PORT}
CMD [ "sh", "-c", "npm run start:prod"]