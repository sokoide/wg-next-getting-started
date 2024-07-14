# WunderGraph Next.js + Prisma sqlite getting started

## Initial Setup

* The repo was created by following the [Getting Started guide](https://docs.wundergraph.com/docs/getting-started/nextjs-quickstart)

## How to add Prisma after WunderGraph project creation

* After the itial setup, ran the following commands to add prisma (already added in the repo).

```sh
npm install @prisma/client
npm install prisma --save-dev

cd .wundergraph

# write schema.prisma

npx prisma generate
npx prisma migrate dev --name init

# add data
sqlite3 users_post.sqlite
> .schema
> insert into User values(1, "alice@foo.com", "hoge");
> insert into User values(2, "bob@foo.com", "page");
> .q
```

## How to run

```sh
npm install && npm start
```

## How to call the users/* API

```sh
# get data from sqlite
$ curl -s http://localhost:9991/operations/users/first | jq
{
  "data": {
    "user": {
      "id": 1,
      "email": "alice@foo.com",
      "name": "hoge",
      "posts": []
    }
  }
}

$ curl -s http://localhost:9991/operations/users/all | jq
{
  "data": {
    "user": [
      {
        "id": 1,
        "email": "alice@foo.com",
        "name": "hoge",
        "posts": []
      },
      {
        "id": 2,
        "email": "bob@foo.com",
        "name": "page",
        "posts": []
      }
    ]
  }
}

# see it in GUI
http://localhost:3000/
```