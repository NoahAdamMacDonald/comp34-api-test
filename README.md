# Bun API Test
Noah MacDonald

GOTO:
- [Project Setup](#-project-setup)
- [Endpoints](#endpoints)
- [Fly IO](#flyio)
- [Noah MacDonald](#noah-macdonald)

- - - -

API: [https://comp34-api.fly.dev/](https://comp34-api.fly.dev/)

> [!NOTE]
> root `/` does not have any requests to it
> `/items` is the base request to visit

- - - -


| Requirements | Required |
| :--- | :--- |
| Linux or WSL | :white_check_mark: |
| node v18+ | :white_check_mark: |
| bun install | :white_check_mark: |
| Fly.io CLI | :white_check_mark: |


- - - -


## :gear: Project Setup

1. Using WSL Install Bun
```bash
sudo apt update
sudo apt install unzip -y
curl -fsSL https://bun.sh/install | bash
curl -L https://fly.io/install.sh | sh
```

2. Linux WSL environment for VS Code
```bash
mkdir ~/comp34-api
cd ~/comp34-api
code .
```

> [!WARNING]
> Place directory in ~/ to avoid conflict with Windows and Bun
> Open VSCode using `code .`

3. Set up bun project
```bash
bun init
```

4. bun dependencies
```bash
bun add hono
bun add -d bun-types
```

5. project structure
```bash
mkdir -p src/routes
touch src/server.ts
touch src/db.ts
touch src/routes/items.ts
touch database.sqlite
```


- - - -

## Endpoints

1. [GET endpoints](#get)
2. [POST endpoints](#post)
3. [Delete endpoints](#delete)

### GET
`/items` returns all items

`/items/1` returns single item of that id. Returns 404 if not found

#### Example output
```json
[
    {
        "id": 4,
        "name": "hello",
        "description": "hello world",
        "created_at": "2026-03-21 05:37:01"
    },
    {
        "id": 3,
        "name": "test 2",
        "description": "second item",
        "created_at": "2026-03-21 05:36:45"
    },
    {
        "id": 2,
        "name": "test",
        "description": "Testing without name",
        "created_at": "2026-03-21 05:32:22"
    }
]
```

### POST
`/items` creates new item with body of `name` and `description`

#### Example input
```json
{
    "name": "test",
    "description": "Testing with name"
}
```

#### Example output
Success
```json
{
  "id": 2
}
```

Error
```json
{
  "error": "Name is required"
}
```



### DELETE
`/items/1` deletes item by id returns 404 if not found

#### Example output
Success
```json
{
  "message": "Deleted"
}
```

Error
```json
{
  "error": "Item not found"
}
```


- - - -


## Fly.IO

create fly.io files
```bash
fly launch
touch Dockerfile
```

Docker File
```dockerfile
FROM oven/bun:1

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --production

COPY . .

EXPOSE 3000

CMD ["bun", "run", "src/server.ts"]

```

Create persistent SQLite volume
```bash
fly volumes create data --size 1

```

add to fly.toml
```plaintext
[mounts]
  source="data"
  destination="/data"
```

deploy app
```bash
fly deploy
```

Starting and Stopping
```bash
fly scale count 0 -a comp34-api
fly scale count 1 -a comp34-api

```


- - - -

## Noah MacDonald

- :globe_with_meridians: [noah-macdonald.com](https://noah-macdonald.com)
- README created using [writeme](https://writeme.pages.dev/editor)

















