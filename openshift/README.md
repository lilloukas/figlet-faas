# _Figlet_ on MOC OpenShift

Here, we use [Caddy](https://caddyserver.com/) to provide HTTPS, which is a
reverse-proxy in front of _FaaS_.

## Introduction

Typically, deploying a stateless service such as _FaaS_ is trvial.
In fact, you can do it all from OpenShift's web GUI. However the goal
here was to use HTTPS. Although MOC claims to support HTTPS routes
automatically, it doesn't actually work.

https://docs.massopen.cloud/en/latest/openshift/Securing-Routes.html

Caddy is a decent workaround. It is an HTTP server with automatic
HTTPS, and has a reverse-proxy feature.

## Notes

- To work around the Docker Hub rate limit, we are using `ghcr.io` exclusively,
  and have rehosted the `caddy` image at `ghcr.io/fnndsc/caddy`.
- Caddy wants to listen on `:80` and `:443`, which we override to be `:8000` and `:8443`.
  OpenShift does not allow binding to priviliged ports.
- Caddy needs persistent volumes to store HTTPS certificates.
- [Caddyfile](https://caddyserver.com/docs/caddyfile) is represented as a
  [ConfigMap](https://kubernetes.io/docs/concepts/configuration/configmap/).
- I first got this working without an HTTP route. However, the `caddy` container
  was slow to solve the ACME challenge and many errors were displayed in the log.
  Ultimately, it ended up working anyways. `insecureEdgeTerminationPolicy: Redirect`
  was added to the route retrospectively.

## Other Options

We could run [`certbot`](https://certbot.eff.org/) using a
[cron job](https://docs.openshift.com/container-platform/3.11/dev_guide/cron_jobs.html)
to update the certificates for routes which would be a more difficult but direct solution.
This way, traffic can be passed from OpenShift's HAproxy directly to the _FaaS_ container,
instead of having yet another hop through Caddy.
