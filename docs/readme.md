# ![Logo](media/favicon.png)

# Project document.

## Nodejs Install - Production

```shell
$ npm install
▀ ╢█████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╟
$ npm run prod
```

## Nodejs run

```shell
$ npm install
▀ ╢█████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╟
$ npm run start
```

## Nodejs Install - Development

```shell
$ npm install
▀ ╢█████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╟
$ npm run dev
```

## Docker Install

```docker
docker build -t web-architecture-sails .
```

## Docker Run

```
docker run -d -p 80:5000 web-architecture-sails
```

## Deployment environment

- CONNECTION_STRING variable will be defined around the "server application" environment.

### config/datastores.js

```js
{
  //.
  //.

  url: process.env["CONNECTION_STRING"] || undefined;
}
```

### use application service web nodejs "application settings"

example mongodb 2.2.12

```
mongodb://dbUser:dbPassword@cluster-server-0:port,cluster-server-1:port,cluster-server-0:port/databaseName?ssl=true&replicaSet=main-cluster-shard-0&authSource=admin&retryWrites=true&w=majority
```

example mongodb 3.0 or later

```
mongodb://dbUser:dbPassword@cluster-server-0:port/databaseName?retryWrites=true&w=majority
```
