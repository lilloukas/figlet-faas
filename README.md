# Figlet as a Service

_FaaS_ provides the [FIGlet](https://en.wikipedia.org/wiki/FIGlet)
command over HTTP.

## Usage

```shell
$ curl https://figlet.moc.chrisproject.org/\?message=Hello+World
_   _      _ _         _    _            _     _
| | | |    | | |       | |  | |          | |   | |
| |_| | ___| | | ___   | |  | | ___  _ __| | __| |
|  _  |/ _ \ | |/ _ \  | |/\| |/ _ \| '__| |/ _` |
| | | |  __/ | | (_) | \  /\  / (_) | |  | | (_| |
\_| |_/\___|_|_|\___/   \/  \/ \___/|_|  |_|\__,_|

```

## About Project

In the root directory is a simple [express.js](http://expressjs.com/)
server application which provides the _FaaS_ service.

This project explores experimental approaches to working around
challenges with deploying web apps on the
[Mass Open Cloud](https://massopen.cloud/).
See [openshift/README.md](openshift/README.md) for details.
