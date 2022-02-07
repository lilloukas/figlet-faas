FROM node:15-alpine

LABEL org.opencontainers.image.authors="Jennings Zhang <dev@babyMRI.org>" \
      org.opencontainers.image.title="FIGlet as a Service" \
      org.opencontainers.image.description="Provides the figlet command over an HTTP API" \
      org.opencontainers.image.source="https://github.com/FNNDSC/figlet-moc"

WORKDIR /app
COPY . .
RUN ["yarn"]

CMD ["yarn", "start"]
EXPOSE 5000
