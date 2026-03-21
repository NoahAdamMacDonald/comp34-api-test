FROM oven/bun:1

WORKDIR /app

# Copy package.json and bun.lock
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --production

# Copy the rest of the app
COPY . .

EXPOSE 3000

CMD ["bun", "run", "src/server.ts"]