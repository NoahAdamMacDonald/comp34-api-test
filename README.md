# Bun API Test

| Requirements | Required |
| :--- | :--- |
| Linux or WSL | :white_check_mark: |
| node v18+ | :white_check_mark: |
| bun install | :white_check_mark: |


- - - -


## :gear: Project Setup

1. Using WSL Install Bun
```bash
sudo apt update
sudo apt install unzip -y
curl -fsSL https://bun.sh/install | bash

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
bun add hono better-sqlite3
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












