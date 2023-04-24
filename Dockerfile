FROM node:19.8.1-alpine3.17

RUN adduser --disabled-password --gecos '' appuser

WORKDIR /home/appuser

COPY --chown=appuser:appuser package.json ./
COPY --chown=appuser:appuser package-lock.json ./
COPY --chown=appuser:appuser ./astro.config.mjs ./
COPY --chown=appuser:appuser ./src ./src

RUN chown -R appuser:appuser /home/appuser && npm ci --production

USER appuser

ENTRYPOINT [ "npm", "start" ]
