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




